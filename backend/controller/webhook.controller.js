export const webhook = async (req, res) => {
  res.status(200).json({
    message: "webhook created successfully",
  });
};
