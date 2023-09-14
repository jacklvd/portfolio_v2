/* eslint-disable @typescript-eslint/no-explicit-any */
// These two are just helpers, they curate spring data, values that are later being interpolated into css
export const to = (i: number) => ({
    x: 0,
    y: i * -4,
    scale: 1,
    rot: -10 + Math.random() * 20,
    delay: i * 100
  })
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export const from = (_i: any) => ({
    x: 0,
    rot: 0,
    scale: 1.5,
    y: -1000
  })
  
  // This is being used down there in the view, it interpolates rotation and scale into a css transform
  export const trans = (r: number, s: any) => `perspective(1500px) rotateX(0deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`