import useLayoutChecks from '../utils/useLayoutChecks';
import styles from '../css/FormSheet.module.css'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import CustomForm from './CustomForm'

const FormSheet = props => {
  const { isDesktop } = useLayoutChecks();

  const url =
    'https://gmail.us4.list-manage.com/subscribe/post?u=33345c9bc17f10bac6afdd0ac&amp;id=736d801cb8'

  return (
    <>
      <p
        style={isDesktop ? { marginBottom: '60px' } : { marginBottom: '26px' }}
        className={styles.title}
      >
        Keep up to date with our events
      </p>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          ></CustomForm>
        )}
      />
    </>
  )
}

export default FormSheet
