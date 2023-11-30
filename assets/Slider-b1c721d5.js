import{r,j as t}from"./index-4688d2f3.js";import{g as d}from"./GlobalAPI-5c923316.js";import{e as m,f as x}from"./index.esm-4f211ce8.js";import"./iconBase-9fa68be2.js";const p="https://image.tmdb.org/t/p/original/",s=window.innerWidth,b=()=>{const[i,n]=r.useState([]),o=r.useRef();r.useEffect(()=>{a()},[]);const a=async()=>{const e=await d();n(e.data.results)},c=e=>{e.scrollLeft+=s-110},l=e=>{e.scrollLeft-=s-110};return t.jsxs("div",{children:[t.jsx(m,{className:`hidden md:block text-white text-[30px] absolute
    mx-8 mt-[150px] cursor-pointer `,onClick:()=>l(o.current)}),t.jsx(x,{className:`hidden md:block text-white text-[30px] absolute
    mx-8 mt-[150px] cursor-pointer right-0`,onClick:()=>c(o.current)}),t.jsx("div",{className:`flex overflow-x-auto w-full px-16 py-4
scrollbar-none scroll-smooth`,ref:o,children:i.map(e=>t.jsx("img",{src:p+e.backdrop_path,className:`min-w-full  md:h-[310px] object-cover
        object-left-top mr-5 rounded-md hover:border-[4px]
        border-gray-400 transition-all duration-100 ease-in`}))})]})};export{b as default};
