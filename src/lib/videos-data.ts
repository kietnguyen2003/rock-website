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
    song_name: "Electric Waves",
    youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    is_primary: true
  },
  {
    id: 2,
    song_name: "Neon Dreams",
    youtube_link: "https://www.youtube.com/watch?v=oHg5SJYRHA0",
    thumbnail: "https://img.youtube.com/vi/oHg5SJYRHA0/maxresdefault.jpg",
    is_primary: true
  },
  {
    id: 3,
    song_name: "Digital Frequency",
    youtube_link: "https://www.youtube.com/watch?v=9bZkp7q19f0",
    thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
    is_primary: true
  },
  {
    id: 4,
    song_name: "Gamma Rays",
    youtube_link: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
    thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg",
    is_primary: false
  },
  {
    id: 5,
    song_name: "Sound Revolution",
    youtube_link: "https://www.youtube.com/watch?v=hFcLyDb7niM",
    thumbnail: "https://img.youtube.com/vi/hFcLyDb7niM/maxresdefault.jpg",
    is_primary: false
  },
  {
    id: 6,
    song_name: "Beat Machine",
    youtube_link: "https://www.youtube.com/watch?v=L_jWHffIx5E",
    thumbnail: "https://img.youtube.com/vi/L_jWHffIx5E/maxresdefault.jpg",
    is_primary: false
  },
  {
    id: 7,
    song_name: "Spectrum Light",
    youtube_link: "https://www.youtube.com/watch?v=y6120QOlsfU",
    thumbnail: "https://img.youtube.com/vi/y6120QOlsfU/maxresdefault.jpg",
    is_primary: false
  },
  {
    id: 8,
    song_name: "Future Sound",
    youtube_link: "https://www.youtube.com/watch?v=djV11Xbc914",
    thumbnail: "https://img.youtube.com/vi/djV11Xbc914/maxresdefault.jpg",
    is_primary: false
  }
];

export const getPrimaryVideos = (): Video[] => {
  return videosData.filter(video => video.is_primary);
};

export const getAllVideos = (): Video[] => {
  return videosData;
};