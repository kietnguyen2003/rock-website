export interface Video {
  id: number;
  song_name: string;
  youtube_link: string;
  thumbnail: string;
  is_primary: boolean;
}

export const videosData: Video[] = [
  {
    id: 1,
    song_name: "Xì xào",
    youtube_link: "https://www.youtube.com/watch?v=ByN3QG4XO3s",
    thumbnail: "https://img.youtube.com/vi/ByN3QG4XO3s/maxresdefault.jpg",
    is_primary: true
  },
  {
    id: 2,
    song_name: "Vết trầy",
    youtube_link: "https://www.youtube.com/watch?v=odU9y8CfUxA",
    thumbnail: "https://img.youtube.com/vi/odU9y8CfUxA/maxresdefault.jpg",
    is_primary: true
  },
  {
    id: 3,
    song_name: "Sắt đá",
    youtube_link: "https://www.youtube.com/watch?v=eBSFL4UsYe0",
    thumbnail: "https://img.youtube.com/vi/eBSFL4UsYe0/maxresdefault.jpg",
    is_primary: true
  },
  {
    id: 4,
    song_name: "Ngán mưa",
    youtube_link: "https://www.youtube.com/watch?v=J-u07Etwrw0",
    thumbnail: "https://img.youtube.com/vi/J-u07Etwrw0/maxresdefault.jpg",
    is_primary: false
  },
  {
    id: 5,
    song_name: "Đông xe",
    youtube_link: "https://www.youtube.com/watch?v=CMYh311TzkE",
    thumbnail: "https://img.youtube.com/vi/CMYh311TzkE/maxresdefault.jpg",
    is_primary: false
  },
  {
    id: 6,
    song_name: "Nuối tiếc",
    youtube_link: "https://www.youtube.com/watch?v=9lPfdQCrKrA",
    thumbnail: "https://img.youtube.com/vi/9lPfdQCrKrA/maxresdefault.jpg",
    is_primary: false
  },
  {
    id: 7,
    song_name: "Lang thang",
    youtube_link: "https://www.youtube.com/watch?v=DFzQlJxYvuc",
    thumbnail: "https://img.youtube.com/vi/DFzQlJxYvuc/maxresdefault.jpg",
    is_primary: false
  },
  {
    id: 8,
    song_name: "Xót thương",
    youtube_link: "https://www.youtube.com/watch?v=Mv80k6zEKHM",
    thumbnail: "https://img.youtube.com/vi/Mv80k6zEKHM/maxresdefault.jpg",
    is_primary: false
  },
  {
    id: 9,
    song_name: "Ký ức",
    youtube_link: "https://www.youtube.com/watch?v=RCpZSVUJMuw",
    thumbnail: "https://img.youtube.com/vi/RCpZSVUJMuw/maxresdefault.jpg",
    is_primary: false
  }
];

export const getPrimaryVideos = (): Video[] => {
  return videosData.filter(video => video.is_primary);
};

export const getAllVideos = (): Video[] => {
  return videosData;
};