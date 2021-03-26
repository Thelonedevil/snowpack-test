import './index.scss'
export default function header(text){
    const el = document.createElement("h1");
    el.textContent=text;
    document.body.append(el);
}