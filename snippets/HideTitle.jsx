export const HidePageTitle = () => {
  useEffect(() => {
    const el = document.getElementById("page-title");
    if (el) {
      el.style.display = "none";
    }
  }, []);

  return null;
};
