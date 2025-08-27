import { defineComponent, mergeProps, ref, computed, unref, withCtx, createVNode, shallowRef, getCurrentInstance, provide, cloneVNode, h, createElementBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderSlot, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { _ as _export_sfc } from './server.mjs';
import { N as NuxtImg } from './NuxtImg-Csp8Nil6.mjs';
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
import 'vue-router';
import './composables-CqtgT27J.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    text: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
      _push(`<span>${ssrInterpolate(_ctx.text)}</span></button>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Button.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Button = Object.assign(_sfc_main$6, { __name: "UiButton" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    const isClient = ref(false);
    const isLargeScreen = computed(() => {
      if (!isClient.value) return false;
      return false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "inicio",
        class: "relative flex items-center justify-center min-h-[500px] sm:min-h-[600px] h-screen bg-cover bg-center bg-no-repeat overflow-x-hidden",
        style: { "background-image": "url('/images/banners/tarjeta-presentacion.png')", "background-attachment": "scroll" }
      }, _attrs))} data-v-cac1110a><div class="absolute inset-0 bg-black/40 flex items-center justify-center overflow-x-hidden" data-v-cac1110a><div class="text-center text-white max-w-4xl w-full px-4 sm:px-6 lg:px-8 z-10" data-v-cac1110a><h1 class="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 leading-tight drop-shadow-lg" data-v-cac1110a> La Pizza que Siempre Querrás Repetir </h1><div class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 lg:gap-12 mb-8 sm:mb-12" data-v-cac1110a><div class="flex items-center justify-center gap-2 text-lg sm:text-xl lg:text-2xl drop-shadow" data-v-cac1110a>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "ic:round-star",
        class: "text-yellow-400 flex-shrink-0",
        width: isLargeScreen.value ? 36 : 24,
        height: isLargeScreen.value ? 36 : 24
      }, null, _parent));
      _push(`<span class="text-center sm:text-left" data-v-cac1110a>La preferida de todos</span></div><div class="flex items-center justify-center gap-2 text-lg sm:text-xl lg:text-2xl drop-shadow" data-v-cac1110a>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "ic:round-access-time",
        class: "text-green-300 flex-shrink-0",
        width: isLargeScreen.value ? 30 : 24,
        height: isLargeScreen.value ? 30 : 24
      }, null, _parent));
      _push(`<span class="text-center sm:text-left" data-v-cac1110a>Listas en tan solo 10 minutos!</span></div></div><div class="flex justify-center items-center" data-v-cac1110a><a href="/documents/MenúPizzeríaPedestales.pdf" download class="inline-block w-full sm:w-auto max-w-xs" data-v-cac1110a>`);
      _push(ssrRenderComponent(Button, {
        text: "Descargar Menú",
        class: "w-full sm:w-auto justify-center"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "ic:baseline-download",
              width: "24",
              height: "24"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Icon), {
                icon: "ic:baseline-download",
                width: "24",
                height: "24"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a></div></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Hero.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["__scopeId", "data-v-cac1110a"]]), { __name: "LandingHero" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    title: {},
    img: {},
    description: {},
    portions: {},
    sizes: {},
    popular: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex flex-col transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl cursor-pointer mx-auto" }, _attrs))} data-v-e9c388ce><div class="relative" data-v-e9c388ce><div class="w-full h-[160px] sm:h-[180px] md:h-[200px] bg-gray-50 flex items-center justify-center p-4" data-v-e9c388ce>`);
      if (_ctx.img) {
        _push(ssrRenderComponent(unref(NuxtImg), {
          src: _ctx.img,
          alt: "Pizza",
          class: "max-w-full max-h-full object-contain rounded-lg",
          format: "webp",
          loading: "lazy"
        }, null, _parent));
      } else {
        _push(`<div class="text-gray-400 text-sm" data-v-e9c388ce>Sin imagen</div>`);
      }
      _push(`</div>`);
      if (_ctx.popular) {
        _push(`<span class="absolute top-2 sm:top-3 left-2 sm:left-3 bg-red-500 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full shadow flex items-center gap-1" data-v-e9c388ce>`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "material-symbols:favorite-rounded",
          width: "14",
          height: "14",
          class: "sm:w-4 sm:h-4"
        }, null, _parent));
        _push(` Favorita </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="absolute top-2 sm:top-3 right-2 sm:right-3 bg-gradient-to-r from-green-200 to-emerald-300 text-gray-700 text-xs px-2 sm:px-3 py-1 rounded-full flex items-center gap-1 shadow-sm" data-v-e9c388ce>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "ic:round-access-time",
        class: "h-3 w-3 sm:h-4 sm:w-4 inline"
      }, null, _parent));
      _push(`<span class="hidden sm:inline" data-v-e9c388ce>10-15 min</span><span class="sm:hidden" data-v-e9c388ce>10min</span></span></div><div class="px-3 sm:px-4 py-3 flex-1 flex flex-col" data-v-e9c388ce><div class="flex justify-between items-center mb-2" data-v-e9c388ce><h3 class="font-bold text-lg sm:text-xl text-gray-800 truncate text-center w-full my-0" data-v-e9c388ce>${ssrInterpolate(_ctx.title)}</h3></div><p class="text-gray-500 text-xs sm:text-sm mb-3 leading-relaxed overflow-hidden description-text" data-v-e9c388ce>${ssrInterpolate(_ctx.description)}</p>`);
      if (_ctx.sizes && _ctx.sizes.length > 0) {
        _push(`<div class="mb-2" data-v-e9c388ce><div class="grid grid-cols-2 gap-1.5 sm:gap-2" data-v-e9c388ce><!--[-->`);
        ssrRenderList(_ctx.sizes, (size, index) => {
          _push(`<div class="border border-red-200 rounded-lg bg-white p-1.5 sm:p-2 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow min-h-0" data-v-e9c388ce><span class="text-gray-800 font-semibold text-xs sm:text-sm mb-0.5 leading-tight text-center" data-v-e9c388ce>${ssrInterpolate(size.name)}</span><span class="text-gray-500 text-[10px] sm:text-[11px] mb-1 leading-none text-center" data-v-e9c388ce>${ssrInterpolate(size.portions)} porciones</span><span class="text-red-600 font-extrabold text-sm sm:text-base leading-none" data-v-e9c388ce>$${ssrInterpolate(size.price.toFixed(2))}</span></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else if (_ctx.portions) {
        _push(`<p class="text-green-700 text-xs font-semibold mb-5" data-v-e9c388ce>Porciones: ${ssrInterpolate(_ctx.portions)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Card.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Card = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["__scopeId", "data-v-e9c388ce"]]), { __name: "UiCard" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "MenuPreview",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "menu",
        class: "pb-12 pt-20 px-4 text-center bg-gradient-to-t from-green-500 to-emerald-800"
      }, _attrs))}><div class="max-w-4xl mx-auto mb-8 sm:mb-10"><h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">Nuestras Pizzas</h2></div><div class="w-full mx-auto"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 justify-items-center max-w-7xl mx-auto px-2 sm:px-0">`);
      _push(ssrRenderComponent(Card, {
        title: "Pizza Hawaiana",
        img: "/images/pizzas/hawaiana.png",
        description: "Jámon, Piña y Queso",
        sizes: [
          { name: "FAMILIAR", price: 13, portions: 12 },
          { name: "MEDIANA", price: 9, portions: 10 },
          { name: "PEQUEÑA", price: 7, portions: 8 },
          { name: "INDIVIDUAL", price: 4.5, portions: 6 },
          { name: "INFANTIL", price: 2.75, portions: 4 }
        ],
        popular: true
      }, null, _parent));
      _push(ssrRenderComponent(Card, {
        title: "Pizza Tradicional",
        img: "/images/pizzas/tradicional.png",
        description: "Jamón y Queso",
        sizes: [
          { name: "FAMILIAR", price: 10.5, portions: 12 },
          { name: "MEDIANA", price: 7.5, portions: 10 },
          { name: "PEQUEÑA", price: 5.5, portions: 8 },
          { name: "INDIVIDUAL", price: 3, portions: 6 },
          { name: "INFANTIL", price: 2.5, portions: 4 }
        ],
        popular: true
      }, null, _parent));
      _push(ssrRenderComponent(Card, {
        title: "Pizza Fungui",
        img: "/images/pizzas/fungui.png",
        description: "Jamón, Cebolla y Champiñones",
        sizes: [
          { name: "FAMILIAR", price: 15, portions: 12 },
          { name: "MEDIANA", price: 11.75, portions: 10 },
          { name: "PEQUEÑA", price: 8, portions: 8 },
          { name: "INDIVIDUAL", price: 5, portions: 6 }
        ],
        popular: false
      }, null, _parent));
      _push(ssrRenderComponent(Card, {
        title: "Pizza Pepperoni",
        img: "/images/pizzas/peperoni.png",
        description: "Pepperoni y Queso",
        sizes: [
          { name: "FAMILIAR", price: 14, portions: 12 },
          { name: "MEDIANA", price: 10, portions: 10 },
          { name: "PEQUEÑA", price: 8, portions: 8 },
          { name: "INDIVIDUAL", price: 5, portions: 6 }
        ],
        popular: false
      }, null, _parent));
      _push(ssrRenderComponent(Card, {
        title: "Pizza Deli Trópical",
        img: "/images/pizzas/delitropical.png",
        description: "Pollo, Jamón y Piña",
        sizes: [
          { name: "FAMILIAR", price: 15, portions: 12 },
          { name: "MEDIANA", price: 12, portions: 10 },
          { name: "PEQUEÑA", price: 8, portions: 8 },
          { name: "INDIVIDUAL", price: 5.5, portions: 6 }
        ],
        popular: false
      }, null, _parent));
      _push(ssrRenderComponent(Card, {
        title: "Pizza Mixta",
        img: "/images/pizzas/mixta.png",
        description: "Jamón, Salchicha, Pimiento, Carne molida, Champiñones, Salami y Cebolla",
        sizes: [
          { name: "FAMILIAR", price: 18.5, portions: 12 },
          { name: "MEDIANA", price: 15, portions: 10 },
          { name: "PEQUEÑA", price: 10, portions: 8 },
          { name: "INDIVIDUAL", price: 5.5, portions: 6 }
        ],
        popular: false
      }, null, _parent));
      _push(ssrRenderComponent(Card, {
        title: "Pizza Napolitana",
        img: "/images/pizzas/napolitana.png",
        description: "Tomate en rodajas, Orégano y Queso",
        sizes: [
          { name: "FAMILIAR", price: 10, portions: 12 },
          { name: "MEDIANA", price: 7, portions: 10 },
          { name: "PEQUEÑA", price: 5, portions: 8 },
          { name: "INDIVIDUAL", price: 3, portions: 6 }
        ],
        popular: false
      }, null, _parent));
      _push(ssrRenderComponent(Card, {
        title: "Pizza Ranchito",
        img: "/images/pizzas/ranchito.png",
        description: "Jamón, Salchicha, Pepperoni, Carne molida, Tocino, Salami y Queso",
        sizes: [
          { name: "FAMILIAR", price: 20, portions: 12 },
          { name: "MEDIANA", price: 16, portions: 10 },
          { name: "PEQUEÑA", price: 12, portions: 8 },
          { name: "INDIVIDUAL", price: 5.5, portions: 6 }
        ],
        popular: false
      }, null, _parent));
      _push(ssrRenderComponent(Card, {
        title: "Pizza Tocichoclo",
        img: "/images/pizzas/tocichoclo.png",
        description: "Tocino, Salami, Choclo y Queso",
        sizes: [
          { name: "FAMILIAR", price: 15, portions: 12 },
          { name: "MEDIANA", price: 12, portions: 10 },
          { name: "PEQUEÑA", price: 9, portions: 8 },
          { name: "INDIVIDUAL", price: 5, portions: 6 }
        ],
        popular: false
      }, null, _parent));
      _push(ssrRenderComponent(Card, {
        title: "Pizza Tricolor",
        img: "/images/pizzas/tricolor.png",
        description: "Jamón, Piña, Pepperoni, Queso",
        sizes: [
          { name: "FAMILIAR", price: 14, portions: 12 },
          { name: "MEDIANA", price: 11, portions: 10 },
          { name: "PEQUEÑA", price: 8, portions: 8 },
          { name: "INDIVIDUAL", price: 5, portions: 6 }
        ],
        popular: false
      }, null, _parent));
      _push(ssrRenderComponent(Card, {
        title: "Pizza Chicken",
        img: "/images/pizzas/chicken.png",
        description: "Pollo, Pimiento y Champiñones",
        sizes: [
          { name: "FAMILIAR", price: 16, portions: 12 },
          { name: "MEDIANA", price: 13.5, portions: 10 },
          { name: "PEQUEÑA", price: 9.5, portions: 8 },
          { name: "INDIVIDUAL", price: 5, portions: 6 }
        ],
        popular: false
      }, null, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/MenuPreview.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const MenuPreview = Object.assign(_sfc_main$3, { __name: "LandingMenuPreview" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    const isClient = ref(false);
    const isMobile = computed(() => {
      if (!isClient.value) return false;
      return false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        id: "contacto",
        class: "bg-[#101522] text-gray-200 pb-12 pt-20 px-4 overflow-x-hidden"
      }, _attrs))}><div class="max-w-4xl mx-auto mb-8 sm:mb-10 text-center"><h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-200 mb-4">Contáctanos</h2><p class="text-base sm:text-lg text-gray-400 leading-relaxed"> ¿Tienes dudas, sugerencias o quieres hacer un pedido especial? <br class="hidden sm:block"> ¡Estamos aquí para ayudarte y hacer tu experiencia deliciosa! </p></div><div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 overflow-x-hidden"><div class="flex flex-col gap-6 lg:col-span-3"><div class="bg-white rounded-2xl shadow p-4 sm:p-6 flex flex-col overflow-hidden"><div class="flex items-center gap-2 mb-4"><span class="bg-red-100 text-red-500 rounded-full p-2 flex items-center justify-center">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "bxs:map",
        width: "20",
        height: "20",
        class: "sm:w-6 sm:h-6"
      }, null, _parent));
      _push(`</span><span class="font-bold text-lg sm:text-xl text-gray-800">Información de Contacto</span></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"><div class="flex flex-col gap-3 justify-center"><span class="inline-flex items-center bg-gray-200 rounded-full px-3 py-3 sm:py-4 text-sm sm:text-base font-medium text-gray-700 gap-2 overflow-hidden">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "bxs:map",
        class: "text-red-500 flex-shrink-0",
        width: isMobile.value ? 20 : 32,
        height: isMobile.value ? 20 : 32
      }, null, _parent));
      _push(`<span class="font-semibold text-xs sm:text-base truncate">María Angélica Idrobo y Rosa, Catucuamba - Quito, S52-555</span></span><span class="inline-flex items-center bg-gray-200 rounded-full px-3 py-3 sm:py-4 text-sm sm:text-base font-medium text-gray-700 gap-2">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "logos:whatsapp-icon",
        class: "text-red-500 flex-shrink-0",
        width: isMobile.value ? 18 : 24,
        height: isMobile.value ? 18 : 24
      }, null, _parent));
      _push(`<span class="font-semibold">0993740527</span></span><span class="inline-flex items-center bg-gray-200 rounded-full px-3 py-3 sm:py-4 text-sm sm:text-base font-medium text-gray-700 gap-2 overflow-hidden">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "ic:baseline-email",
        class: "text-red-500 flex-shrink-0",
        width: isMobile.value ? 18 : 24,
        height: isMobile.value ? 18 : 24
      }, null, _parent));
      _push(`<span class="font-semibold text-xs sm:text-base break-all truncate">pizzeriapedestales@gmail.com</span></span></div><div class="bg-gray-200 rounded-xl w-full h-[150px] sm:h-[180px] flex items-center justify-center overflow-hidden"><iframe src="https://www.google.com/maps/embed?pb=!4v1755832919551!6m8!1m7!1sUh4K7giKIthP5krp4yUcXg!2m2!1d-0.3270631050055807!2d-78.57148220917325!3f117.18452546034955!4f1.3987389562910266!5f0.7820865974627469" width="100%" height="100%" style="${ssrRenderStyle({ "border": "0", "border-radius": "0.75rem" })}" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Ubicación en Google Maps" allow="geolocation"></iframe></div></div></div></div><div class="flex flex-col gap-6 lg:col-span-2"><div class="bg-white rounded-2xl shadow p-4 sm:p-6 flex flex-col gap-4"><div class="flex items-center gap-2 mb-2"><span class="bg-orange-100 text-orange-500 rounded-full p-2 flex items-center justify-center">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "mdi:clock-outline",
        width: "20",
        height: "20",
        class: "sm:w-6 sm:h-6"
      }, null, _parent));
      _push(`</span><span class="font-bold text-lg sm:text-xl text-gray-800">Horarios de Atención</span></div><div class="flex flex-col text-sm sm:text-base divide-y divide-gray-100"><div class="flex justify-between items-center py-2 sm:py-3"><span class="text-gray-700">Lun - Jue</span><span class="text-gray-900 font-medium">11:00 - 21:00</span></div><div class="flex justify-between items-center py-2 sm:py-3"><span class="text-gray-700">Vie - Sáb</span><span class="text-gray-900 font-medium">11:00 - 21:00</span></div><div class="flex justify-between items-center py-2 sm:py-3"><span class="text-gray-700">Domingo</span><span class="text-gray-900 font-medium">12:00 - 21:00</span></div></div><div class="mt-3 flex flex-col items-center"><div class="text-xs font-bold text-gray-500 mb-2 text-center">SÍGUENOS EN</div><div class="flex gap-3 sm:gap-4 justify-center"><a href="#" aria-label="Facebook" class="bg-blue-600 hover:bg-blue-700 rounded-full p-2 text-xl transition flex items-center justify-center">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "mdi:facebook",
        class: "w-5 h-5 sm:w-6 sm:h-6 text-white"
      }, null, _parent));
      _push(`</a><a href="#" aria-label="Instagram" class="bg-pink-500 hover:bg-pink-600 rounded-full p-2 text-xl transition flex items-center justify-center">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "mdi:instagram",
        class: "w-5 h-5 sm:w-6 sm:h-6 text-white"
      }, null, _parent));
      _push(`</a><a href="#" aria-label="Twitter" class="bg-sky-500 hover:bg-sky-600 rounded-full p-2 text-xl transition flex items-center justify-center">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "mdi:twitter",
        class: "w-5 h-5 sm:w-6 sm:h-6 text-white"
      }, null, _parent));
      _push(`</a></div></div></div></div></div></footer>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Contact.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Contact = Object.assign(_sfc_main$2, { __name: "LandingContact" });
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  ...false,
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      if (mounted.value) {
        const vnodes = slots.default?.();
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Carrusel",
  __ssrInlineRender: true,
  setup(__props) {
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
        fallback: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative w-full overflow-hidden rounded-lg shadow-lg h-[250px] sm:h-[320px] md:h-[400px] lg:h-[480px] xl:h-[560px] mx-auto max-w-7xl bg-gray-200 flex items-center justify-center" data-v-35e15006${_scopeId}><div class="text-gray-500" data-v-35e15006${_scopeId}>Cargando carrusel...</div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative w-full overflow-hidden rounded-lg shadow-lg h-[250px] sm:h-[320px] md:h-[400px] lg:h-[480px] xl:h-[560px] mx-auto max-w-7xl bg-gray-200 flex items-center justify-center" }, [
                createVNode("div", { class: "text-gray-500" }, "Cargando carrusel...")
              ])
            ];
          }
        })
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Carrusel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Carrusel = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-35e15006"]]), { __name: "LandingCarrusel" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-x-hidden max-w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(Hero, null, null, _parent));
      _push(`<div class="px-0 py-0 sm:py-0 overflow-x-hidden">`);
      _push(ssrRenderComponent(Carrusel, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(MenuPreview, null, null, _parent));
      _push(ssrRenderComponent(Contact, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Vfdib5DZ.mjs.map
