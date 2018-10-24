import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {reduxForm, focus, formValueSelector} from 'redux-form';
import { Form, FormGroup, Label, Input} from 'reactstrap';
import {connect} from 'react-redux';

import {postArticle} from '../actions';

export class ArticleForm extends Component{
  onSubmit(article) {
    this.props.dispatch(postArticle(article))
  }
  
  render(){
    if(!this.props.loggedIn){
      return <Redirect to='/' />;
    }

    return(
      <Form>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input type="text" name="title" id="article-title" placeholder="What's your idea?"/>
        </FormGroup>
        <FormGroup>
          <Label for="article-field">Body</Label>
          <Input type="textarea" name="body" id="article-body" placeholder="This is how I take over the world..."/>
        </FormGroup>
        <FormGroup>
          <Label for="category">Category</Label>
          <Input type="select" name="category" id="article-category">
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="school">School</option>
            <option value="social">Social</option>
            <option value="spiritual">Spiritual</option>
            <option value="fitness">Fitness</option>
          </Input>
        </FormGroup>
      </Form>
    )
  }
}

const afterSubmit = () => {
  return <Redirect to='/articles' />
};

ArticleForm = reduxForm({
  form: 'ArticleForm',
  onSubmitSuccess: afterSubmit,
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('ArticleForm', Object.keys(errors)[0]))
})(ArticleForm);

const selector = formValueSelector('ArticleForm');

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  category: selector(state, 'category'),
  initialValues: {'category': 'work'}
});

export default connect(mapStateToProps)(ArticleForm);