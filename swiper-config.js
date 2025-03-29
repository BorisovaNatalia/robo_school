// const content = document.querySelector('.scroll-content');
// const thumb = document.querySelector('.scroll-thumb');
// const scrollbar = document.querySelector('.custom-scrollbar');
// const btnLeft = document.getElementById('scroll-left');
// const btnRight = document.getElementById('scroll-right');

// let isDragging = false;
// let startX;
// let startScrollLeft;

// /* Обновляем положение ползунка */
// function updateThumbPosition() {
//     const scrollWidth = content.scrollWidth - content.clientWidth;
//     const thumbWidth = (content.clientWidth / content.scrollWidth) * scrollbar.clientWidth;
//     const thumbPosition = (content.scrollLeft / scrollWidth) * (scrollbar.clientWidth - thumbWidth);

//     thumb.style.width = `${thumbWidth}px`;
//     thumb.style.transform = `translateX(${thumbPosition}px)`;
// }

// /* Прокрутка по кнопкам */
// btnLeft.addEventListener('click', () => {
//     content.scrollLeft -= 300;
//     setTimeout(updateThumbPosition, 100);
// });

// btnRight.addEventListener('click', () => {
//     content.scrollLeft += 300;
//     setTimeout(updateThumbPosition, 100);
// });

// /* Перетаскивание скроллбара */
// thumb.addEventListener('mousedown', (e) => {
//     isDragging = true;
//     startX = e.clientX;
//     startScrollLeft = content.scrollLeft;
//     thumb.style.cursor = 'grabbing';
// });

// /* Перемещение мыши */
// document.addEventListener('mousemove', (e) => {
//     if (!isDragging) return;
//     const deltaX = e.clientX - startX;
//     const scrollWidth = content.scrollWidth - content.clientWidth;
//     const thumbWidth = (content.clientWidth / content.scrollWidth) * scrollbar.clientWidth;
//     const maxThumbPos = scrollbar.clientWidth - thumbWidth;

//     const newScrollLeft = startScrollLeft + (deltaX / maxThumbPos) * scrollWidth;
//     content.scrollLeft = newScrollLeft;
//     updateThumbPosition();
// });

// /* Отпускание мыши */
// document.addEventListener('mouseup', () => {
//     isDragging = false;
//     thumb.style.cursor = 'grab';
// });

// /* Обновляем положение ползунка при скролле */
// content.addEventListener('scroll', updateThumbPosition);
// updateThumbPosition();
