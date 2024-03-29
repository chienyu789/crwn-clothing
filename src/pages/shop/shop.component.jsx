import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.action';
import { selectCollectionsFetching, selectCollectionsLoaded } from '../../redux/shop/shop.selectors';
import  WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  componentDidMount(){
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render(){
    const { match, isCollectionsFetching, isCollectionsLoaded } = this.props;
    return(
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={props => (<CollectionOverviewWithSpinner isLoading={isCollectionsFetching} {...props}/>)}/>
        <Route path={`${match.path}/:collectionId`} render={props => (<CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props}/>)}/>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionsFetching: selectCollectionsFetching,
  isCollectionsLoaded: selectCollectionsLoaded,
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);