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
  const classes = useStyles();
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
            />
            <TextField
              required
              id="outlined-required"
              label="Hourly rate"
              variant="outlined"
              placeholder="e.g. 199"
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
            />
            <TextField
              required
              id="outlined-required"
              label="location"
              variant="outlined"
              placeholder="e.g. Yerevan"
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
          <Button variant="contained" color="primary" startIcon={<SaveIcon />}>
            Save User
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export { AddUserModal };
