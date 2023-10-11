import React, { useState, useEffect } from "react";
import NavBar from "../Navbar";
import Card from "../Card";
import WatchCard from "../WatchCard/index";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import sortList from "./Sort list_alt.png";
import Modal from "../Modal";
import Footer from "../Footer";
const Home = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [videos, setVideos] = useState([]);
  const [showSortType, setShowSortType] = useState(false);
  const [sortType, setSortType] = useState("publishedAt");
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isList, setIsList] = useState(true);
  const [currentId, setCurrentId] = useState("");
  const [star, setStar] = useState(1);
  const getData = () => {
    axios
      .get("http://localhost:5001/api/videos", {
        headers: {
          Authorization: `Bearer ${
            localStorage.getItem("accessToken") == null
              ? localStorage.getItem("dummyToken")
              : localStorage.getItem("accessToken")
          }`,
          data: "application/json",
        },
        params: {
          limit: 10,
          currentPage: page,
          sortBy: sortType,
        },
      })
      .then((res) => {
        setVideos([...videos, ...res.data.data.body]);
        setTotalItems(res.data.data.totalItems);
        setPage(page + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChangeSortType = (event, type) => {
    event.preventDefault();
    if (type !== sortType) {
      setSortType(type);
    }
    setPage(1);
    setVideos([]);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [sortType]);

  const fetchProducts = async () => {
    if (videos.length >= totalItems) {
      setHasMore(false);
      return;
    }
    getData();
  };
  const closeModal = () => {
    axios
      .get("http://localhost:5001/api/rating", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          data: "application/json",
        },
        params: {
          videoId: currentId,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.data === null) {
          setStar(1);
        } else {
          setStar(parseInt(res.data.data.star));
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setShowModal(!showModal);
  };
  return (
    <div className="max-h-screen">
      <div>
        <NavBar />
      </div>
      <div className="flex justify-center mt-5">
        <div className="w-5/6 flex justify-end">
          {isList ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              onClick={() => setIsList(!isList)}
            >
              <rect x="4" y="5" width="16" height="5" rx="1" stroke="#33363F" />
              <rect
                x="4"
                y="14"
                width="16"
                height="5"
                rx="1"
                stroke="#33363F"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              onClick={() => setIsList(!isList)}
            >
              <rect
                x="3"
                y="3"
                width="7"
                height="7"
                rx="1"
                stroke="#33363F"
                stroke-width="2"
                stroke-linecap="round"
              />
              <rect
                x="3"
                y="14"
                width="7"
                height="7"
                rx="1"
                stroke="#33363F"
                stroke-width="2"
                stroke-linecap="round"
              />
              <rect
                x="14"
                y="3"
                width="7"
                height="7"
                rx="1"
                stroke="#33363F"
                stroke-width="2"
                stroke-linecap="round"
              />
              <rect
                x="14"
                y="14"
                width="7"
                height="7"
                rx="1"
                stroke="#33363F"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          )}
          <img
            className="ml-2"
            src={sortList}
            onClick={() => {
              setShowSortType(!showSortType);
            }}
          ></img>
          {showSortType ? (
            <div className="fixed top-36 bg-white text-black right-4">
              <div>
                <button
                  disabled={sortType === "publishedAt"}
                  onClick={(e) => {
                    handleChangeSortType(e, "publishedAt");
                  }}
                >
                  Sort by Published At
                </button>
              </div>
              <div>
                <button
                  disabled={sortType === "title"}
                  onClick={(e) => {
                    handleChangeSortType(e, "title");
                  }}
                >
                  Sort by Title
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <InfiniteScroll
        className="flex justify-center"
        style={{ overflow: "hidden", width: "100%" }}
        dataLength={videos.length} // Độ dài hiện tại của danh sách sản phẩm
        next={fetchProducts} // Hàm được gọi khi scroll xuống cuối cùng
        hasMore={hasMore} // Tiếp tục load khi còn sản phẩm
        // loader={<h4>Loading...</h4>} // Hiển thị thông báo loading
        // endMessage={<p>No more videos</p>} // Thông báo hết sản phẩm
      >
        {!isList ? (
          <div className="w-5/6 grid gap-y-14 gap-x-8 grid-cols-3">
            {videos.map((video) => (
              <div
                key={video.id}
                onClick={() => {
                  setCurrentId(video.id);
                  setShowModal(!showModal);
                }}
              >
                <Card key={video.id} video={video} />
              </div>
            ))}
          </div>
        ) : (
          <div className="w-5/6 mr-24 flex flex-col gap-3">
            {videos.map((item) => {
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setShowModal(!showModal);
                    setCurrentId(item.id);
                  }}
                >
                  <WatchCard data={item} key={item.id} />
                </div>
              );
            })}
          </div>
        )}
      </InfiniteScroll>
      <Footer></Footer>
      {showModal ? (
        <div>
          <Modal closeModal={() => closeModal()} id={currentId} star={star} />
        </div>
      ) : null}
    </div>
  );
};

export default Home;
