import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { name, phone, email, notes, source } = await req.json();

    // 儲存詢問資料到資料庫，可在後台查看
    await base44.asServiceRole.entities.Inquiry.create({
      name,
      phone,
      email: email || '',
      notes: notes || '',
      source: source || ''
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});