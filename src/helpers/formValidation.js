const validateRequiredInput = (inputElement) => {
  if (!inputElement.hasAttribute("required")) return;

  const containerElement = inputElement.parentElement;
  if (inputElement.value.trim()) containerElement.classList.remove("error");
  else containerElement.classList.add("error");
};

export { validateRequiredInput };