const Layout = (props) => {
  return (
    <div>
      <p>header</p>
      {props.children}
      <p>footer</p>
    </div>
  );
};

ReactDOM.render((
  <Layout>
    <h1>Page Title</h1>
    <p>This is page</p>
  </Layout>
), document.getElementById('app'));
