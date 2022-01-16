import moment from 'moment';
export function fetchData(sort) {
  let url = 'https://www.reddit.com/r/DotA2.json';
  if (sort) {
    url = `https://www.reddit.com/r/DotA2/${sort}.json`;
  }
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log('=api response=', response.data.children);
      const data = transformResponse(response.data.children);
      return data;
    });
}

const transformResponse = (response) => {
  const transformedData = [];
  if (response.length === 0) return transformedData;
  response.map((res) => {
    const data = res.data;
    const tmp_arr = {};
    tmp_arr.title = data.title;
    tmp_arr.id = data.id;
    tmp_arr.score = data.score;
    tmp_arr.author = data.author;
    tmp_arr.comments = data.num_comments;
    tmp_arr.timestamp = data.created_utc;
    tmp_arr.self_text = data.selftext;
    tmp_arr.subreddit_name_prefixed = data.subreddit_name_prefixed;
    transformedData.push(tmp_arr);
  });
  return transformedData;
};


export const getFromNowTime = (timestamp) => {
  if (!timestamp) return moment().fromNow();
  return moment(timestamp * 1000).fromNow();
};
