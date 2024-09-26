import PropTypes from "prop-types";

const FooterEnder = ({ className, style }) => {
  return (
    <div className={className} style={style}>
      <p>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </div>
  );
};
FooterEnder.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};
export default FooterEnder;
