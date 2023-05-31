import { ModalPhoto } from 'components/Modal/Modal';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    isModal: false,
  };

  toggleModal = () => {
    this.setState({ isModal: !this.state.isModal });
  };
  render() {
    const { previewURL, photoURL, alt } = this.props;
    return (
      <li>
        <img
          src={previewURL}
          alt={alt}
          className="ImageGalleryItem"
          onClick={this.toggleModal}
        />
        <ModalPhoto
          isModal={this.state.isModal}
          onClose={this.toggleModal}
          photoURL={photoURL}
          alt={alt}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  previewURL: PropTypes.string,
  photoURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};