### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](/design/desktop-design.png)
![](/design/desktop-thank-you-state.png)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

I learned how to add html elements with animate using opacity instead of display : none;

```css
.thank-you {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 40rem;
  height: auto;
  padding: 2.4rem;
  border-radius: 20px;
  background-color: hsl(213, 19%, 18%);

  opacity: 0;
  pointer-events: none;
  transition: all 0.5s;
}
```

```js
const submit = document.querySelector(".btn-submit");
submit.addEventListener("click", function () {
  // rate display off , than you display on //
  const thankYou = document.querySelector(".thank-you");
  thankYou.style.opacity = 1;
});
```

## Author

- Frontend Mentor - [@maziarja](https://www.frontendmentor.io/profile/maziarja)

## Acknowledgments

I appreciate Jonas Schmedtmann for his awesome courses on Udemy.
