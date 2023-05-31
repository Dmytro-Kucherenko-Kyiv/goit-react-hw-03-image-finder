import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

ul, ol{
    list-style: none;
    margin: 0;
    padding: 0;
}

/*
 * Стили компонента Searchbar
 */
.Searchbar {
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 4rem;
  padding: 0.75rem 1.5rem; 
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}

/*
 * Стили компонента SearchForm
 */
.SearchForm {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 37rem;
  background-color: #fff;
  border-radius: 0.2rem;
  overflow: hidden;
}

.SearchForm-button {
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background: none;
}

.SearchForm-button:hover {
  opacity: 1;
}

.SearchForm-button-label {
  display: flex;
  justify-content: center;
}

.SearchForm-input {
  display: inline-block;
  width: 100%;
  height: 100%;
  font: inherit;
  font-size: 1.25rem;
  border: none;
  outline: none;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

.SearchForm-input::placeholder {
  font: inherit;
  font-size: 1.125rem;
}

.GalleryList {   
  display: grid;
  max-width: 95%;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin: 0 auto;
  
}
/*
 * Стили компонента ImageGalleryItem
 */

.ImageGalleryItem { 
  aspect-ratio: 16 / 9;
  object-fit: cover;
  overflow: hidden;
  border-radius: 0.125rem;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
}

.ImageGalleryItem-image {
  width: 100%;
  /* height: 260px; */
  object-fit: cover;
  aspect-ratio: 16 / 9; 
  overflow: hidden;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.ImageGalleryItem:hover {
  transform: scale(1.03);
  cursor: zoom-in;
}

/* 
 * Стили компонента Modal
 */
/*  
.OverlayItem {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
} */

/* .Modal {
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
}  */

/*
* Стили компонента Buton (Load more)
*/
.Button {
  width: 10%;
  margin: 0 auto;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.Button:hover,
.Button:focus {
  background-color: #303f9f;
}
`;