export const IncNum = number => {
  return {
    type: "INCREMENT",
    payloadInc: number,
  };
};
export const DecNum = () => {
  return {
    type: "DECREMENT",
  };
};
