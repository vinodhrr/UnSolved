import TextArea from './UI/TextArea/TextArea'
import Button from './UI/Button/Button'
import Layout from './components/Layout/Layout'
import * as classes from './App.module.css'
import QuestionSummary from './components/QuestionSummary/QuestionSummary'

function App() {
  return (
    <div >
    <Layout>
      <QuestionSummary />
      </Layout>
    {/* <Layout>
      <div className={classes.App}>
    <form >
      <main><TextArea /></main>
    <Button btnName="submit" type="Proceed"/>
    <Button btnName="Cancel" type="Cancel"/>
    </form>
    </div>
    </Layout> */}
    
    </div>
  );
}

export default App;
