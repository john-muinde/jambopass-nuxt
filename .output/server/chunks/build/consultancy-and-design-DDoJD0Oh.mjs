import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { u as useHead } from './vue.8fc199ce-DerijIML.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'consola/core';
import 'nuxt-site-config/urls';
import 'ipx';
import 'node:path';
import './server.mjs';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:net';
import 'pinia';
import 'unhead';
import 'vue-router';
import 'ant-design-vue';
import 'axios';

const _imports_0 = publicAssetsURL("/assets/images/consultancy-and-design.jpg");
const _imports_1 = publicAssetsURL("/assets/images/design/image3_design_c.jpg");
const _imports_2 = publicAssetsURL("/assets/images/design/image1_design_c.jpg");
const _imports_3 = publicAssetsURL("/assets/images/design/image2_design_c.jpg");
const _sfc_main = {
  __name: "consultancy-and-design",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Consultancy & Design",
      meta: [
        {
          name: "description",
          content: "Sheffield offers Design & Consultancy which entails our comprehensive expert guidance and services related to the planning, design, and optimization of your facility spaces in the scope of Food Service, Laundry, Cold Storage, and Civil & MEP Works."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))}><div class="page-content pg-white"><div class="container"><div class="page-content pg-white who-we-are-section"><div class="overlay"></div><div class="pt-5 pb-2"><div class="container"><div class="row"><div class="col-md-12"><div class="row"><div class="col-lg-7 who-we-are"><h2 class="our-history-title">Consultancy &amp; Design</h2><p class="lead about-us-lead text-primary mb-1"> Crafting Vision into Reality </p><p class="who-we-are-p"> Sheffield offers Design &amp; Consultancy which entails our comprehensive expert guidance and services related to the planning, design, and optimization of your facility spaces in the scope of Food Service, Laundry, Cold Storage, and Civil &amp; MEP Works.This will include the following: </p><br><h5 class="mt-2 sub-title-cd"> Advantages of Sheffield Consultancy </h5><p class="who-we-are-p"> The advantages of Sheffield Consultancy encompass a comprehensive range of factors, ensuring a seamless and efficient project execution: </p><ul class="graduate-trainee-program mb-3 mt-3"><li><span class="badge badge-secondary">1</span><span class="li-text"><strong>Correct Flow of Production:</strong> Ensuring a smooth and logical flow from the receiving area to food service, optimizing the production process. </span></li><li><span class="badge badge-secondary">2</span><span class="li-text"><strong>Accurate Space Area Allocations and Design:</strong> Precise planning of space allocations and design, maximizing the functionality and usability of the available area. </span></li><li><span class="badge badge-secondary">3</span><span class="li-text"><strong>Right Equipment Selection:</strong> Expertise in selecting the most suitable and efficient equipment for the specific needs of the project. </span></li><li><span class="badge badge-secondary">4</span><span class="li-text"><strong>Efficient Space Utilization:</strong> Maximizing the utilization of space, machinery, and various facilities within the project to enhance operational efficiency. </span></li><li><span class="badge badge-secondary">5</span><span class="li-text"><strong>Choice of Durable and Hygienic Surroundings:</strong> Selection of durable and hygiene-safe materials for commercial settings, including considerations for floor, wall, ceiling finishes, lighting, water and drain systems, as well as addressing issues like grease, smell, and waste management. </span></li><li><span class="badge badge-secondary">6</span><span class="li-text"><strong>Implementation of Hygiene and Safety Standards (HACCP):</strong> Incorporating and implementing stringent hygiene and safety standards, particularly adhering to Hazard Analysis and Critical Control Points (HACCP) guidelines. </span></li><li><span class="badge badge-secondary">7</span><span class="li-text"><strong>Ventilation, LPG, and Power Requirements:</strong> Addressing and optimizing ventilation needs, LPG requirements, and power specifications to ensure a safe and functional environment. </span></li><li><span class="badge badge-secondary">8</span><span class="li-text"><strong>Budget Costing:</strong> Providing accurate budget estimations for the project, ensuring financial transparency and effective cost management. </span></li><li><span class="badge badge-secondary">9</span><span class="li-text"><strong>Tender Specifications:</strong> Preparing detailed tender specifications that articulate project requirements clearly and comprehensively. </span></li><li><span class="badge badge-secondary">10</span><span class="li-text"><strong>Timelining of Project Execution:</strong> Developing a well-structured timeline for the execution of the project, ensuring timely completion and delivery. </span></li></ul></div><div class="col-lg-5 consultancy-and-design-image"><div class=""><img style="${ssrRenderStyle({ "margin-left": "0%", "margin-top": "20%" })}"${ssrRenderAttr("src", _imports_0)} alt="" class=""><img${ssrRenderAttr("src", _imports_1)}></div></div></div></div></div></div></div></div><div class="page-content mt-4 pt-2"><div class="container"><div class="row"><div class="row"><div class="col-lg-12"><div class="row"><div class="col-lg-4 offset-lg-1"><img${ssrRenderAttr("src", _imports_2)} class="img"></div><div class="col-lg-6 offset-lg-1"><h5 class="mt-2 sub-title-cd"> Pre Design &amp; Consultancy </h5><ul class="graduate-trainee-program mb-3"><li><span class="badge badge-secondary">1</span><span class="li-text"><strong> Equipment Layout, Design, and Schedule:</strong> We will provide a detailed plan specifying equipment placement and schedule. </span></li><li><span class="badge badge-secondary">2</span><span class="li-text"><strong>Service Drawings:</strong> Comprehensive 2D and elevation drawings will be supplied, covering Gas, Plumbing, and Electrical requirements. </span></li><li><span class="badge badge-secondary">3</span><span class="li-text"><strong>Power Load Requirement:</strong> We will outline the power load necessary for the kitchen equipment. </span></li><li><span class="badge badge-secondary">4</span><span class="li-text"><strong>Bill of Quantity:</strong> A complete inventory of all equipment will be included. </span></li></ul></div><div class="col-lg-6 mt-2"><h5 class="mt-2 sub-title-cd">Project Implementation</h5><ul class="graduate-trainee-program"><li><span class="badge badge-secondary">5</span><span class="li-text"><strong>Program of Works:</strong> We will provide a timeline and plan of action and monitor the project timeline and budget to ensure successful completion. </span></li><li><span class="badge badge-secondary">6</span><span class="li-text"><strong>Project Management:</strong> Overseeing the implementation of the design, working with contractors and subcontractors. </span></li><li><span class="badge badge-secondary">7</span><span class="li-text"><strong>On-Site Technician:</strong> An on-site technician will be available to mark service points as needed. </span></li><li><span class="badge badge-secondary">8</span><span class="li-text"><strong>Supply and Installation:</strong> We will take care of equipment supply and professional installation. </span></li><li><span class="badge badge-secondary">9</span><span class="li-text"><strong>User Training:</strong> During handover and commissioning, we will provide training to ensure your team is proficient in equipment usage. </span></li><li><span class="badge badge-secondary">10</span><span class="li-text"><strong>After-Sales Support:</strong> We are committed to providing ongoing support, including preventive maintenance, to ensure the kitchen&#39;s continued efficiency. </span></li></ul></div><div class="col-lg-6"><img${ssrRenderAttr("src", _imports_3)}></div></div></div></div></div></div></div></div></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/consultancy-and-design.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=consultancy-and-design-DDoJD0Oh.mjs.map
