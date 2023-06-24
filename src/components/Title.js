const Title = ({ Text1, Text2 }) => {
  return (
    <div className='section-title'>
      <h2>
        {Text1} <span>{Text2}</span>
      </h2>
    </div>
  );
};
export default Title;
