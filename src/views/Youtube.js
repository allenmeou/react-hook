import "./Youtube.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import moment from "moment/moment";

const Youtube = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");

  // useEffect(() => {}, []);

  const handleSearchYoutube = async () => {
    let res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "10",
        key: "AIzaSyAYG6KnrINqlf08Lrtc9tVb_UvNL-H8cGw",
        type: "video",
        q: query,
      },
    });

    if (res && res.data.items) {
      let raw = res.data.items;
      let result = [];
      if (raw && raw.length > 0) {
        raw.map((item) => {
          let object = {};

          object.id = item.id.videoId;
          object.title = item.snippet.title;
          object.createdAt = item.snippet.publishedAt;
          object.author = item.snippet.channelTitle;
          object.description = item.snippet.description;

          result.push(object);
        });
      }
      console.log("check result >>>", result);
      setVideos(result);
    }
  };

  return (
    <div className="youtube-search-container">
      <div className="yt-search">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="button" onClick={handleSearchYoutube}>
          Search
        </button>
      </div>

      {videos &&
        videos.length > 0 &&
        videos.map((item) => {
          return (
            <div className="yt-result" key={item.id}>
              <div className="left">
                <iframe
                  className="iframe-yt"
                  src={`https://www.youtube.com/embed/${item.id}`}
                  title="#30.2 Design Giao Diện &amp; Hoàn Thiện Chức Năng &#39;Search Youtube&#39; với Google APIs và React Hook"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="right">
                <div className="title">
                  <h3>{item.title}</h3>
                </div>

                <div className="created-at">
                  Created At :
                  {moment(item.createdAt).format("DD-MM-YYYY HH:mm:ss A")}
                </div>

                <div className="author">Author : {item.author}</div>

                <div className="description">{item.description}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Youtube;

// {
//   "kind": "youtube#searchListResponse",
//   "etag": "F8bAbxYPTRgxdn1Gi5PHm54dwtk",
//   "nextPageToken": "CAUQAA",
//   "regionCode": "VN",
//   "pageInfo": {
//     "totalResults": 904,
//     "resultsPerPage": 5
//   },
//   "items": [
//     {
//       "kind": "youtube#searchResult",
//       "etag": "BI3hUAtqyiOL_H1m_qQnyRJgo8w",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "hoMAVLW-66c"
//       },
//       "snippet": {
//         "publishedAt": "2023-05-13T05:00:11Z",
//         "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//         "title": "[FULL] Khóa Học  React Level Thực Tập - Thực Hành Bài Test React.JS Cho Beginners | Hỏi Dân IT",
//         "description": "Trong video này, chúng ta cùng nhau đi làm một bài test thực tập dành cho sinh viên muốn đi làm thực tế ngoài công ty, sử dụng ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/hoMAVLW-66c/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/hoMAVLW-66c/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/hoMAVLW-66c/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "Hỏi Dân IT",
//         "liveBroadcastContent": "none",
//         "publishTime": "2023-05-13T05:00:11Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "3zW9RrDr_uYO9Uaetli7Ab0weOw",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "4uxVGr4gc2Y"
//       },
//       "snippet": {
//         "publishedAt": "2023-05-10T11:00:08Z",
//         "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//         "title": "Giới Thiệu Khóa Học React TypeScript Pro | Những Kiến Thức Fresher React Cần Biết",
//         "description": "Đây là khóa học thực hành sử dụng React với Typescript, bằng cách thực hành dự án xây dựng Portfolio. Trong khóa học này, ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/4uxVGr4gc2Y/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/4uxVGr4gc2Y/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/4uxVGr4gc2Y/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "Hỏi Dân IT",
//         "liveBroadcastContent": "none",
//         "publishTime": "2023-05-10T11:00:08Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "f6gIm5BIjWWYTX5dIZlLlkIEFBA",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "jUOwicA-IQ0"
//       },
//       "snippet": {
//         "publishedAt": "2022-08-17T11:15:14Z",
//         "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//         "title": "Giới Thiệu Khóa Học React Pro Max - Những Kiến Thức Fresher React Sẽ Phải Biết",
//         "description": "Link Khóa Học Này trên Udemy: https://www.udemy.com/course/hoidanit-react-basic-ultimate Tất cả khóa học của Hỏi Dân IT: ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/jUOwicA-IQ0/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/jUOwicA-IQ0/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/jUOwicA-IQ0/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "Hỏi Dân IT",
//         "liveBroadcastContent": "none",
//         "publishTime": "2022-08-17T11:15:14Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "6GZbREsdXoZuejdHEtBW3j7tS_Y",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "1kSY7cCo7Q0"
//       },
//       "snippet": {
//         "publishedAt": "2023-04-23T10:00:10Z",
//         "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//         "title": "Tương Lai Của Dev React.JS | Nên Học Gì Để Không Thất Nghiệp Khi React Thay Đổi ?",
//         "description": "Vào tháng 3, 2023, React chính thức có ngôi nhà mới với địa chỉ https://react.dev, nhà cũ reactjs.org đã được đổi thành ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/1kSY7cCo7Q0/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/1kSY7cCo7Q0/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/1kSY7cCo7Q0/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "Hỏi Dân IT",
//         "liveBroadcastContent": "none",
//         "publishTime": "2023-04-23T10:00:10Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "HJGy598cq78o4x9XZx-B__xOX6w",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "CMigSUq1AIk"
//       },
//       "snippet": {
//         "publishedAt": "2022-11-19T02:36:01Z",
//         "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//         "title": "Vite và Create React App (Frontend)",
//         "description": "shorts #hoidanit So sánh nhanh về công cụ Vite và Create React App cho ứng dụng React Bạn nào muốn donate hay mua cho ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/CMigSUq1AIk/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/CMigSUq1AIk/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/CMigSUq1AIk/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "Hỏi Dân IT",
//         "liveBroadcastContent": "none",
//         "publishTime": "2022-11-19T02:36:01Z"
//       }
//     }
//   ]
// }
