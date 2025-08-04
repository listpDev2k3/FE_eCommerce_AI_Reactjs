export const getImageUrl = (imageObj, fallback = "/assets/image/english.jpg") => {
  if (!imageObj || !imageObj.url) return fallback;
  return `http://localhost:1337${imageObj.url}`;
};

export const getSliderImages = (sliderImages, fallback = ["/assets/image/english.jpg"]) => {
  if (!sliderImages || !Array.isArray(sliderImages)) return fallback;
  return sliderImages.map(img => `http://localhost:1337${img.url}`);
};