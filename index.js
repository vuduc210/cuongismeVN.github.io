// Music By CisMe
// Up Link Nhạc - Đuôi Menu
// Ước Bị Crack

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('keydown', function(event) {
    // Chặn F12
    if (event.key === 'F12') {
      event.preventDefault();
      alert("F12 đã bị vô hiệu hóa.");
    }
    // Chặn Ctrl+Shift+I (Mở Developer Tools)
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
      event.preventDefault();
      alert("Tổ hợp Ctrl+Shift+I đã bị vô hiệu hóa.");
    }
    // Chặn Ctrl+Shift+J (Console)
    if (event.ctrlKey && event.shiftKey && event.key === 'J') {
      event.preventDefault();
      alert("Tổ hợp Ctrl+Shift+J đã bị vô hiệu hóa.");
    }
    // Chặn Ctrl+U (Xem mã nguồn)
    if (event.ctrlKey && event.key === 'U') {
      event.preventDefault();
      alert("Tổ hợp Ctrl+U đã bị vô hiệu hóa.");
    }
  });


document.addEventListener("contextmenu", function (event) {
    event.preventDefault();  // Ngăn menu chuột phải
    alert("Chuột phải đã bị vô hiệu hóa.");
  });



document.addEventListener("keydown", function (event) {
    // Chặn Ctrl+Shift+I (Chrome, Firefox) và Ctrl+Shift+J
    if ((event.ctrlKey && event.shiftKey && event.key === "I") ||
        (event.ctrlKey && event.shiftKey && event.key === "J") ||
        (event.ctrlKey && event.key === "U")) {  // Chặn Ctrl+U (Xem mã nguồn)
      event.preventDefault();
      alert("Tổ hợp phím đã bị vô hiệu hóa.");
    }
  });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const songList = [
    { title: "Em Nào Có Tội", link: "https://thanhdieu.com/files/Em-N%C3%A0o-C%C3%B3-T%E1%BB%99i.mp3" },
    { title: "Nhạc Tết Chill", link: "https://github.com/cuongismeVN/music/blob/main/bacphan.mp3" },
    { title: "Cambodia Remix", link: "https://download1478.mediafire.com/facw5vvps9ngitA-DZU8DopsB_8F6r94l5jZhSrU0sBh4e_vdu3KOYsL8a-XDdMWh-zN9JW7jZkC0Is4g_z7ML73vKP73CDdLaIkNSyJdSMF3Ygzwa1SzBU6YYh1Y2XVboqAO6NmF3SGzdKPAD4Bf2IV5Y9TRFl-zxmnm7XQHyCajw/6u4r8nbjmtunguz/tomp3.cc+-+The+History+Of+Future+Dan+Dan++Cambodia+Remix+++Nhạc+Hot+Tik+Tok+2022_64kbps.mp3" },
];

document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('searchBar');
    const songListElement = document.getElementById('songList');
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');
    
    // Hiển thị danh sách bài hát
    function renderSongList(songs) {
        songListElement.innerHTML = ''; // Xóa danh sách hiện tại
        songs.forEach(function(song) {
            const li = document.createElement('li');
            li.textContent = song.title;
            li.setAttribute('data-link', song.link);
            
            // Xử lý sự kiện khi click vào bài hát
            li.addEventListener('click', function() {
                const songLink = li.getAttribute('data-link');
                audioSource.src = songLink; // Cập nhật link nhạc
                audioPlayer.load();  // Nạp lại audio với link mới
                audioPlayer.play();  // Phát nhạc
            });
            
            songListElement.appendChild(li);
        });
    }

    renderSongList(songList); // Hiển thị danh sách bài hát khi tải trang

    // Tìm kiếm bài hát
    searchBar.addEventListener('keyup', function() {
        const searchValue = this.value.toLowerCase();
        const filteredSongs = songList.filter(song => song.title.toLowerCase().includes(searchValue));
        renderSongList(filteredSongs);
    });
});
