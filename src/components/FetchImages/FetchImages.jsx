import React, { Component } from 'react';
import Spinner from '../Loader';
import API from '../../services/galery-api';
import Button from '../Button';
import ImageGallery from '../ImageGallery';
import EmptyField from '../EmptyField';
import PropTypes from 'prop-types';

export default class ImageGalleryInfo extends Component {
  state = {
    images: [],
    status: 'idle',
    error: null,
    page: 1,
  };

  static propTypes = {
    query: PropTypes.string,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;

    if (prevQuery !== nextQuery) {
      this.setState({ page: 1, images: [] });
    }

    if (prevQuery !== nextQuery) {
      this.setState({ status: 'pending' });

      this.fetchImagesGallery();
    }
    if (prevState.page !== this.state.page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  fetchImagesGallery = () => {
    const nextQuery = this.props.query;

    API.fetchImages(nextQuery, this.state.page)
      .then(newImages => {
        this.setState(prevState => ({
          images: [...prevState.images, ...newImages],
          page: this.state.page + 1,
          status: 'resolved',
        }));
        if (newImages.length === 0) {
          throw new Error('No results were found. Try another search.');
        }
      })
      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  onLoadMore = () => {
    this.fetchImagesGallery();
  };

  render() {
    const { images, status, error } = this.state;
    if (status === 'idle') {
      return (
        <div style={{ textAlign: 'center' }}>
          {' '}
          Please enter a value for search images!
        </div>
      );
    }

    if (status === 'pending') {
      return <Spinner />;
    }

    if (status === 'rejected') {
      return <EmptyField message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGallery images={images} />
          <Button onClick={this.onLoadMore} />
        </>
      );
    }
  }
}
