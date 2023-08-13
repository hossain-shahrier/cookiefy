import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#ECA268',
    isFullTexture: false,
})
export default state;