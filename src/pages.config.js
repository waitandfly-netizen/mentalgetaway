/**
 * pages.config.js - Page routing configuration
 * 
 * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 * 
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page (shown when users visit the app).
 * 
 * Example file structure:
 * 
 *   import HomePage from './pages/HomePage';
 *   import Dashboard from './pages/Dashboard';
 *   import Settings from './pages/Settings';
 *   
 *   export const PAGES = {
 *       "HomePage": HomePage,
 *       "Dashboard": Dashboard,
 *       "Settings": Settings,
 *   }
 *   
 *   export const pagesConfig = {
 *       mainPage: "HomePage",
 *       Pages: PAGES,
 *   };
 * 
 * Example with Layout (wraps all pages):
 *
 *   import Home from './pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from './Layout.jsx';
 *
 *   export const PAGES = {
 *       "Home": Home,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "Home",
 *       Pages: PAGES,
 *       Layout: __Layout,
 *   };
 *
 * To change the main page from HomePage to Dashboard, use find_replace:
 *   Old: mainPage: "HomePage",
 *   New: mainPage: "Dashboard",
 *
 * The mainPage value must match a key in the PAGES object exactly.
 */
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Guide from './pages/Guide';
import Home from './pages/Home';
import InvitationRetreat from './pages/InvitationRetreat';
import OneDayRetreat from './pages/OneDayRetreat';
import Programs from './pages/Programs';
import SilentRetreat from './pages/SilentRetreat';
import TestimonialAcceptSelf from './pages/TestimonialAcceptSelf';
import TestimonialAllIsWell from './pages/TestimonialAllIsWell';
import TestimonialFromHear from './pages/TestimonialFromHear';
import TestimonialHometown from './pages/TestimonialHometown';
import TestimonialNaturally from './pages/TestimonialNaturally';
import TestimonialNightRhythm from './pages/TestimonialNightRhythm';
import TestimonialTrueHappiness from './pages/TestimonialTrueHappiness';
import Testimonials from './pages/Testimonials';
import TransformationStories from './pages/TransformationStories';
import TwoDayRetreat from './pages/TwoDayRetreat';
import About from './pages/About';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Contact": Contact,
    "FAQ": FAQ,
    "Guide": Guide,
    "Home": Home,
    "InvitationRetreat": InvitationRetreat,
    "OneDayRetreat": OneDayRetreat,
    "Programs": Programs,
    "SilentRetreat": SilentRetreat,
    "TestimonialAcceptSelf": TestimonialAcceptSelf,
    "TestimonialAllIsWell": TestimonialAllIsWell,
    "TestimonialFromHear": TestimonialFromHear,
    "TestimonialHometown": TestimonialHometown,
    "TestimonialNaturally": TestimonialNaturally,
    "TestimonialNightRhythm": TestimonialNightRhythm,
    "TestimonialTrueHappiness": TestimonialTrueHappiness,
    "Testimonials": Testimonials,
    "TransformationStories": TransformationStories,
    "TwoDayRetreat": TwoDayRetreat,
    "About": About,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};