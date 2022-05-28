import axios from "axios";

const backendApi = axios.create({
  baseURL: "https://nc-news-app-nw.herokuapp.com/api",
});

export const postComment = (id, username, comment) => {
  return backendApi

    .post(`/api/articles/:article_id/comments`, {
      username: username,
      body: comment,
    })
    .then(({ data }) => {
      return data;
    });
};

export const deleteComment = (id) => {
  return backendApi.delete(`/comments/${id}`).then(() => {});
};
