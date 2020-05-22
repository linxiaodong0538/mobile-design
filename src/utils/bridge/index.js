  const toast = (title, duration = 2000, icon = "none") => {
      uni.showToast({
          title,
          icon,
          duration
      });
  }

  export {
      toast
  }