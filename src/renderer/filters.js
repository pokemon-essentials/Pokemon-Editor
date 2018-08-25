const Filters = {
  methods: {
    $truncate(text, lenght) {
      if (text.length <= lenght) return text;
      return text.substring(0, lenght) + "...";
    }
  }
};

export default Filters;
