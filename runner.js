const cypress = require('cypress')
const { exec } = require('child_process')

const spec = `./cypress/integration/automation/frontPage.test.js`

const config = {
  env: {
    environment: 'metro'
  }
}

cypress
      .run({ spec, config })
      .then( results => {

				console.log(results)
        if ( results.totalFailed > 0 ) {

					// const sendmail = require('sendmail')();

					// sendmail({
					// 		from: 'no-reply@yourdomain.com',
					// 		to: 'testrobi22@yopmail.com',
					// 		subject: 'test sendmail',
					// 		html: 'Mail of test sendmail ',
					// 	}, (err, reply) => {
					// 		console.log(err && err.stack);
					// });

          // exec(`echo "The following spec failed: ${spec}" | mail -s 'Cypress automation test failure' testrobi22@yopmail.com`, (err, stdout, stderr) => {
          //   if (err) {
          //     console.error('exec err ',err)
          //     return
          //   }
          //   console.log('stdout', stdout)
          // })
        }
      })