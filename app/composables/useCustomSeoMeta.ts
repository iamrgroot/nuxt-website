export const useCustomSeoMeta = () => {
  const route = useRoute();

  const title = "Hi! 👋";
  const description = "I am (Robert) Groot";
  const image = "/seo-image.png";

  useSeoMeta({
    title: title,
    description: description,
    ogTitle: title,
    ogDescription: description,
    ogImage: image,
    ogUrl: route.fullPath,
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
    twitterCard: "summary",
  });
};
