import connection from "../services/db";

const retriveMerkleProof = (req, res, next) => {
  if (!req.params) return next(new Error("No form data found"));
  console.log(req.params.mintAddress, "parameter");

  connection.query(
    "SELECT `index`, `mint`, `kind`, `genIndex`, `proof` FROM `tb_proof` WHERE `mint`=?",
    [req.params.mintAddress],
    function (err, fields) {
      if (err) next(err);
      else res.send(fields[0]);
    }
  );
};

export default retriveMerkleProof;
