import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

import { saveUsersApi } from "../../../services/userApi";

import userActions from "../../../redux/user/actions";

import { Modal } from "../../../components/ui-kit/modal";
import { Button } from "../../../components/ui-kit/button";
import { SaveIcon } from "../../../components/ui-kit/icons";
import { Typography } from "../../../components/ui-kit/typography";
import { TextField, Select } from "../../../components/ui-kit/input";

import { useStyles, BootstrapInput } from "../user.style";
interface IProps {
  showModule: boolean;
  onClose: () => void;
}
const AddUserModal: React.FC<IProps> = ({ showModule, onClose }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [location, setLocation] = useState("");
  const [jobtitle, setJobtitle] = useState("");
  const [employmenttype, setEmploymenttype] = useState("");
  const [hourlyrate, setHourlyrate] = useState("");

  const dispatch = useDispatch();

  const classes = useStyles();

  const handleSaveUser = async () => {
    if (
      firstname &&
      lastname &&
      hourlyrate &&
      jobtitle &&
      location &&
      employmenttype
    ) {
      const data = await saveUsersApi({
        id: uuidv4(),
        firstName: firstname,
        lastName: lastname,
        hourlyRate: Number(hourlyrate),
        jobTitle: jobtitle,
        location: location,
        employmentType: employmenttype,
        picture: "https://picsum.photos/100/100",
      });
      dispatch(userActions.setUsers(data));
      onClose();
    } else {
      alert("Please fill all inputs!!!");
    }
  };

  return (
    <Modal
      open={showModule}
      onClose={onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className={classes.modal}
    >
      <div className={classes.paper}>
        <div className="addUserHeader">
          <Typography component="h5" variant="h5" color="primary">
            Add new user
          </Typography>
          <Typography component="span" variant="caption">
            Complete profile blow
          </Typography>
        </div>
        <div className="row">
          <div className="col">
            <TextField
              required
              id="outlined-required"
              label="First name"
              variant="outlined"
              placeholder="e.g. Mostafa"
              onChange={(e) => {
                setFirstname(e.target.value as string);
              }}
            />
            <TextField
              required
              id="outlined-required"
              label="Hourly rate"
              variant="outlined"
              placeholder="e.g. 199"
              onChange={(e) => {
                setHourlyrate(e.target.value as string);
              }}
            />
            <div>
              <label className={classes.label} htmlFor="jobtitle">
                Job title
              </label>
              <Select
                id="demo-customized-select-native"
                input={<BootstrapInput />}
                native
                label="Job title"
                inputProps={{
                  id: "jobtitle",
                }}
                onChange={(e) => {
                  setJobtitle(e.target.value as string);
                }}
              >
                <option aria-label="None" value="" />
                <option value="Frontend">Frontend</option>
                <option value="UI/UX">UI/UX</option>
                <option value="Backend">Backend</option>
              </Select>
            </div>
          </div>
          <div className="col">
            <TextField
              required
              id="outlined-required"
              label="Last name"
              variant="outlined"
              placeholder="e.g. Saffari"
              onChange={(e) => {
                setLastname(e.target.value as string);
              }}
            />
            <TextField
              required
              id="outlined-required"
              label="location"
              variant="outlined"
              placeholder="e.g. Yerevan"
              onChange={(e) => {
                setLocation(e.target.value as string);
              }}
            />
            <div>
              <label htmlFor="employmentType" className={classes.label}>
                Employment type
              </label>
              <Select
                native
                id="demo-customized-select-native"
                input={<BootstrapInput />}
                label="Employment type"
                inputProps={{
                  id: "employmentType",
                }}
                onChange={(e) => {
                  setEmploymenttype(e.target.value as string);
                }}
              >
                <option aria-label="None" value="" />
                <option value="FullTime">FullTime</option>
                <option value="PartTime">PartTime</option>
                <option value="Contract">Contract</option>
              </Select>
            </div>
          </div>
        </div>
        <div className={classes.buttonActions}>
          <Button
            onClick={handleSaveUser}
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
          >
            Save User
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export { AddUserModal };
