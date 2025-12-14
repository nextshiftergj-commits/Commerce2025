const posts = [
  {
    title: '쓸모 없어 보여도 클릭이 터지는 ‘신기한 물건’의 공통점',
    date: '2025-12-13',
    url: '/posts/2025-12-13-why-we-click-weird.html',
    desc: '상품이 아니라 ‘반응’을 파는 구조를 정리합니다.',
  },
  {
    title: '쇼츠에서 재미는 정보가 아니라 리듬에서 나온다',
    date: '2025-12-10',
    url: '/posts/2025-12-10-shorts-rhythm.html',
    desc: '왜 끝까지 보게 되는지(컷, 전개, 템포)만 설명합니다.',
  },
  {
    title: '현장 기록: 가설 → 실행 → 관찰 → 수정 루프',
    date: '2025-12-07',
    url: '/posts/2025-12-07-field-notes-loop.html',
    desc: '결과 자랑이 아니라 반복 가능한 관찰 로그 템플릿.',
  },
];

function renderFeatured(list) {
  const box = document.getElementById('featuredList');
  if (!box) return;
  box.innerHTML = '';
  list.forEach((p) => {
    const a = document.createElement('a');
    a.href = p.url;
    a.className = 'post';
    a.innerHTML = `
      <div class="top">
        <h3>${p.title}</h3>
        <time datetime="${p.date}">${p.date}</time>
      </div>
      <p>${p.desc}</p>
    `;
    box.appendChild(a);
  });
}

function filterPosts(term) {
  const t = term.trim().toLowerCase();
  if (!t) return posts;
  return posts.filter((p) =>
    (p.title + ' ' + p.desc).toLowerCase().includes(t)
  );
}

document.addEventListener('DOMContentLoaded', () => {
  renderFeatured(posts);

  const q = document.getElementById('q');
  if (q) {
    q.addEventListener('input', () => renderFeatured(filterPosts(q.value)));
    window.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== q) {
        e.preventDefault();
        q.focus();
      }
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
