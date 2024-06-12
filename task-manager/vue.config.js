module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/hungbm96.github.io/" // Thay 'tên-repo-của-bạn' bằng tên repository trên GitHub của bạn
      : "/",
};
