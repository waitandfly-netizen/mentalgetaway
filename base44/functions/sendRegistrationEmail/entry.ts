import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

function encodeBase64Url(str) {
  return btoa(unescape(encodeURIComponent(str)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function buildMimeEmail({ to, subject, body }) {
  const mime = [
    `To: ${to}`,
    `Subject: =?UTF-8?B?${btoa(unescape(encodeURIComponent(subject)))}?=`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    '',
    btoa(unescape(encodeURIComponent(body)))
  ].join('\r\n');
  return encodeBase64Url(mime);
}

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { name, phone, email, notes, source } = await req.json();

    // 儲存到資料庫
    await base44.asServiceRole.entities.Inquiry.create({
      name,
      phone,
      email: email || '',
      notes: notes || '',
      source: source || ''
    });

    // 用 Gmail API 發通知信給 taipei.circlelounge@gmail.com
    const { accessToken } = await base44.asServiceRole.connectors.getConnection('gmail');

    const emailBody = `收到新的詢問表單！\n\n姓名：${name}\n電話：${phone}\nEmail：${email || '（未填）'}\n想了解：${notes || '（未填）'}\n得知來源：${source || '（未填）'}`;

    const raw = buildMimeEmail({
      to: 'taipei.circlelounge@gmail.com',
      subject: '【心靈假期】新詢問通知',
      body: emailBody
    });

    const res = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ raw })
    });

    if (!res.ok) {
      const err = await res.text();
      return Response.json({ error: `Gmail API error: ${err}` }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});