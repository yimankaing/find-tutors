import {FOLLOWING} from "./methods";

import {CODE} from "../code";

JsonRoutes.add("get", "/find_following/:selector/:options", function (req, res, next) {
  res.charset = "utf-8";
  const selector = req.params.selector ? JSON.parse(req.params.selector) : {};
  const options = req.params.options ? JSON.parse(req.params.options) : {};
  let data = {};
  data.result = FOLLOWING.findFollowing(selector, options);
  data.code = CODE.OK;
  JsonRoutes.sendResult(res, {
    data: data
  });
});

// JsonRoutes.add("get", "/findOne_following/:selector/:options", function (req, res, next) {
//   res.charset = "utf-8";
//   const selector = req.params.selector ? JSON.parse(req.params.selector) : {};
//   const options = req.params.options ? JSON.parse(req.params.options) : {};
//   let data = {};
//   data.result = FOLLOWING.findOneFollowing(selector, options);
//   data.code = CODE.OK;
//   JsonRoutes.sendResult(res, {
//     data: data
//   });
// });

JsonRoutes.add("post", "/insert_following", function (req, res, next) {
  res.charset = "utf-8";
  const doc = req.body;

  FOLLOWING.insertFollowing(doc, (error, result) => {
    let data = {};
    if (error) {
      data.code = CODE.FORBIDDEN;
      data.msg = error.message;
      data.result = "";
    } else {
      data.code = CODE.CREATED;
      data.result = result;
    }
    JsonRoutes.sendResult(res, {
      data: data
    });
  });
});

JsonRoutes.add("post", "/update_following/:selector/:options", function (req, res, next) {
    res.charset = "utf-8";
    const selector = req.params.selector ? JSON.parse(req.params.selector) : {};
    const modifier = req.body;
    const options = req.params.options ? JSON.parse(req.params.options) : {};
    FOLLOWING.updateFollowing(selector, modifier, options, (error, result) => {
      let data = {};
      if (error) {
        data.code = CODE.FORBIDDEN;
        data.msg = error.message;
        data.result = "";
      } else {
        data.code = result ? CODE.CREATED : CODE.NOT_MODIFIED;
        data.result = result;
      }
      JsonRoutes.sendResult(res, {
        data: data
      });
    });
  }
);

JsonRoutes.add("get", "/remove_following/:selector", function (req, res, next) {
  res.charset = "utf-8";
  const selector = req.params.selector ? JSON.parse(req.params.selector) : {};

  FOLLOWING.removeFollowing(selector, (error, result) => {
    let data = {};
    if (error) {
      data.code = CODE.FORBIDDEN;
      data.msg = error.message;
      data.result = "";
    } else {
      data.code = result ? CODE.CREATED : CODE.NOT_MODIFIED;
      data.result = result;
    }
    JsonRoutes.sendResult(res, {
      data: data
    });
  });
});
