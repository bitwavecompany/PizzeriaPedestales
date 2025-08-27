import { defineComponent, mergeProps, ref, computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { N as NuxtImg } from './NuxtImg-Csp8Nil6.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import './composables-CqtgT27J.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const phoneNumber = "593991961946";
const message = "¡Hola! Me gustaría hacer un pedido en Pizzería Pedestales. ¿Podrían ayudarme?";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const isMenuOpen = ref(false);
    const whatsappUrl = computed(() => {
      const encodedMessage = encodeURIComponent(message);
      return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "fixed top-0 left-0 right-0 z-50 bg-white border-b border-red-200 shadow-sm" }, _attrs))}><div class="max-w-7xl mx-auto overflow-x-hidden"><div class="hidden md:flex items-center justify-between py-3 px-6"><div class="flex items-center gap-3 flex-shrink-0"><span class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(NuxtImg), {
        src: "/logo.png",
        alt: "Logo Pizzería Pedestales",
        class: "h-12 w-auto inline-block align-middle"
      }, null, _parent));
      _push(`<span><span class="block text-xl font-extrabold text-red-500 leading-tight">Pizzería Pedestales</span></span></span></div><nav class="flex-1 flex justify-center"><ul class="flex gap-8"><li><button onclick="location.href=&#39;#inicio&#39;" type="button" class="flex items-center gap-2 text-base font-medium text-gray-800 hover:text-red-600 transition-colors px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-200">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "line-md:home-twotone",
        width: "20",
        height: "20",
        class: "text-red-500"
      }, null, _parent));
      _push(` Inicio </button></li><li><button onclick="location.href=&#39;#menu&#39;" type="button" class="flex items-center gap-2 text-base font-medium text-gray-800 hover:text-red-600 transition-colors px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-200">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "ion:pizza",
        width: "20",
        height: "20",
        class: "text-red-500"
      }, null, _parent));
      _push(` Menú </button></li><li><button onclick="location.href=&#39;#contacto&#39;" type="button" class="flex items-center gap-2 text-base font-medium text-gray-800 hover:text-red-600 transition-colors px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-200">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "healthicons:contact-support",
        width: "20",
        height: "20",
        class: "text-red-500"
      }, null, _parent));
      _push(` Contacto </button></li></ul></nav><div class="flex-shrink-0"><a${ssrRenderAttr("href", unref(whatsappUrl))} target="_blank" rel="noopener noreferrer" class="bg-red-500 hover:bg-red-600 text-white font-medium rounded-full px-7 py-2 transition-colors shadow text-base focus:outline-none focus:ring-2 focus:ring-red-200 inline-block"> Hacer Pedido </a></div></div><div class="md:hidden"><div class="flex items-center justify-between py-3 px-4"><div class="flex items-center gap-2 flex-1 min-w-0">`);
      _push(ssrRenderComponent(unref(NuxtImg), {
        src: "/logo.png",
        alt: "Logo Pizzería Pedestales",
        class: "h-10 w-auto flex-shrink-0"
      }, null, _parent));
      _push(`<span class="text-lg font-extrabold text-red-500 truncate">Pizzería Pedestales</span></div><button class="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-200 flex-shrink-0" aria-label="Toggle menu">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: isMenuOpen.value ? "mdi:close" : "mdi:menu",
        width: "24",
        height: "24",
        class: "text-gray-700"
      }, null, _parent));
      _push(`</button></div><div style="${ssrRenderStyle(isMenuOpen.value ? null : { display: "none" })}" class="border-t border-red-200 bg-white"><nav class="px-4 py-2"><ul class="space-y-1"><li><button class="w-full flex items-center gap-3 text-base font-medium text-gray-800 hover:text-red-600 hover:bg-red-50 transition-colors px-3 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200" type="button" onclick="location.href=&#39;#inicio&#39;">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "line-md:home-twotone",
        width: "20",
        height: "20",
        class: "text-red-500"
      }, null, _parent));
      _push(` Inicio </button></li><li><button class="w-full flex items-center gap-3 text-base font-medium text-gray-800 hover:text-red-600 hover:bg-red-50 transition-colors px-3 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200" type="button" onclick="location.href=&#39;#menu&#39;">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "ion:pizza",
        width: "20",
        height: "20",
        class: "text-red-500"
      }, null, _parent));
      _push(` Menú </button></li><li><button class="w-full flex items-center gap-3 text-base font-medium text-gray-800 hover:text-red-600 hover:bg-red-50 transition-colors px-3 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200" type="button" onclick="location.href=&#39;#contacto&#39;">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "healthicons:contact-support",
        width: "20",
        height: "20",
        class: "text-red-500"
      }, null, _parent));
      _push(` Contacto </button></li></ul><div class="mt-4 pb-2"><a${ssrRenderAttr("href", unref(whatsappUrl))} target="_blank" rel="noopener noreferrer" class="w-full bg-red-500 hover:bg-red-600 text-white font-medium rounded-full px-6 py-3 transition-colors shadow text-base focus:outline-none focus:ring-2 focus:ring-red-200 flex items-center justify-center gap-2">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "logos:whatsapp-icon",
        width: "20",
        height: "20"
      }, null, _parent));
      _push(` Hacer Pedido </a></div></nav></div></div></div></header>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Header = Object.assign(_sfc_main$3, { __name: "LayoutHeader" });
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer overflow-x-hidden" }, _attrs))} data-v-d37f3579><div class="max-w-7xl mx-auto px-4 py-4 sm:py-6 overflow-x-hidden" data-v-d37f3579><p class="text-sm sm:text-base text-center" data-v-d37f3579>© 2025 Pizzería Pedestales - Todos los derechos reservados.</p></div></footer>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d37f3579"]]), { __name: "LayoutFooter" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "WhatsAppButton",
  __ssrInlineRender: true,
  props: {
    phoneNumber: {},
    message: { default: "¡Hola! Me gustaría hacer un pedido en Pizzería Pedestales" },
    tooltipText: { default: "Chatea con nosotros en WhatsApp" }
  },
  setup(__props) {
    const props = __props;
    const whatsappUrl = computed(() => {
      const encodedMessage = encodeURIComponent(props.message);
      return `https://wa.me/${props.phoneNumber}?text=${encodedMessage}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50" }, _attrs))} data-v-f35747ed><a${ssrRenderAttr("href", unref(whatsappUrl))} target="_blank" rel="noopener noreferrer" class="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse hover:animate-none"${ssrRenderAttr("title", _ctx.tooltipText)} data-v-f35747ed><svg class="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-v-f35747ed><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z" data-v-f35747ed></path></svg><span class="absolute right-14 sm:right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block" data-v-f35747ed>${ssrInterpolate(_ctx.tooltipText)} <span class="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800" data-v-f35747ed></span></span></a></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/WhatsAppButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const WhatsAppButton = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-f35747ed"]]), { __name: "UiWhatsAppButton" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-x-hidden max-w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<main class="min-h-screen overflow-x-hidden">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(ssrRenderComponent(WhatsAppButton, {
        "phone-number": "593991961946",
        message: "¡Hola! Me gustaría hacer un pedido en Pizzería Pedestales. ¿Podrían ayudarme?",
        "tooltip-text": "¡Escríbenos por WhatsApp!"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-DF1-7TRc.mjs.map
