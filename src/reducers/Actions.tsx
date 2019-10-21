export const GETINIT = "GETINIT";
export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";

export function getInit() {
  return {
    type: GETINIT
  }
}

export function increase() {
  return { type: INCREASE };
}

export const decrease = () => ({ type: DECREASE });