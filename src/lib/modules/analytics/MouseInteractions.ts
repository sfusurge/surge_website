export enum MouseInteraction {
  CLICK = "Click",
  MOUSE_ENTER = "MouseEnter",
  MOUSE_EXIT = "MouseExit",
  MOUSE_OVER = "MouseOver",
  MOUSE_OUT = "MouseOut",
  SCROLL = "Scroll",
}

export interface MouseEvent {
  event_type: MouseInteraction;
  element_type: string;
}

export namespace MouseInteractions {
  export const Click = (element_type: string): MouseEvent => {
    return {
      event_type: MouseInteraction.CLICK,
      element_type: element_type,
    };
  };

  export const MouseEnter = (element_type: string): MouseEvent => {
    return {
      event_type: MouseInteraction.MOUSE_OVER,
      element_type: element_type,
    };
  };
}
