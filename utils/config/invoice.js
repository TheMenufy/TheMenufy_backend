const nodemailer = require('nodemailer');
const RandomString = require("randomstring");
const moment = require('moment');

const invoiceNb = RandomString.generate({ length: 6, charset: "numeric", });

const invoiceToSend = {

    sendMail: async (req, res) => {

        // console.log(req.order.user.email);
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: `${process.env.EMAIL}`,
                pass: `${process.env.PASSWORD}`,
            },
        });
      

        const options = {
            from: `${process.env.EMAIL}`,
            to: `${req.order.user.email}`,
            subject: "Payment confirmation",
            html: `
      <!DOCTYPE HTML
      PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office">
  
  <head>
      <!--[if gte mso 9]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
      <title></title>
  
      <style type="text/css">
          .table-wrap {
              max-width: 800px;
              margin-top: 20px;
              margin-bottom: 20px;
              overflow-x: auto;
          }
  
          .table,
          .td,
          .th {
              border: 1px solid #ddd;
              text-align: left;
              white-space: nowrap;
          }
  
          .table {
              border-collapse: collapse;
              width: 100%;
          }
  
          .box-wrap,
          .td {
              padding: 15px;
          }
  
          .table .tbody .tr:nth-child(odd) {
              background: #e2e2e2;
          }
  
          .box-wrap {
              padding: 0px 16px;
          }
  
          @media only screen and (min-width: 620px) {
              .u-row {
                  width: 600px !important;
              }
  
              .u-row .u-col {
                  vertical-align: top;
              }
  
              .u-row .u-col-19p33 {
                  width: 115.97999999999998px !important;
              }
  
              .u-row .u-col-20p83 {
                  width: 124.97999999999998px !important;
              }
  
              .u-row .u-col-21p33 {
                  width: 127.97999999999998px !important;
              }
  
              .u-row .u-col-22p66 {
                  width: 135.96px !important;
              }
  
              .u-row .u-col-23p66 {
                  width: 141.96px !important;
              }
  
              .u-row .u-col-23p83 {
                  width: 142.98px !important;
              }
  
              .u-row .u-col-26p17 {
                  width: 157.02px !important;
              }
  
              .u-row .u-col-27p17 {
                  width: 163.02px !important;
              }
  
              .u-row .u-col-28p17 {
                  width: 169.02px !important;
              }
  
              .u-row .u-col-29p84 {
                  width: 179.04px !important;
              }
  
              .u-row .u-col-33p33 {
                  width: 199.98px !important;
              }
  
              .u-row .u-col-100 {
                  width: 600px !important;
              }
  
          }
  
          @media (max-width: 620px) {
              .u-row-container {
                  max-width: 100% !important;
                  padding-left: 0px !important;
                  padding-right: 0px !important;
              }
  
              .u-row .u-col {
                  min-width: 320px !important;
                  max-width: 100% !important;
                  display: block !important;
              }
  
              .u-row {
                  width: 100% !important;
              }
  
              .u-col {
                  width: 100% !important;
              }
  
              .u-col>div {
                  margin: 0 auto;
              }
          }
  
          body {
              margin: 0;
              padding: 0;
          }
  
          table,
          tr,
          td {
              vertical-align: top;
              border-collapse: collapse;
          }
  
          p {
              margin: 0;
          }
  
          .ie-container table,
          .mso-container table {
              table-layout: fixed;
          }
  
          * {
              line-height: inherit;
          }
  
          a[x-apple-data-detectors='true'] {
              color: inherit !important;
              text-decoration: none !important;
          }
  
          @media (max-width: 480px) {
              .hide-mobile {
                  max-height: 0px;
                  overflow: hidden;
                  display: none !important;
              }
          }
  
          table,
          td {
              color: #000000;
          }
  
          @media (max-width: 480px) {
              #u_content_text_87 .v-text-align {
                  text-align: left !important;
              }
  
              #u_content_text_88 .v-text-align {
                  text-align: left !important;
              }
  
              #u_content_heading_2 .v-container-padding-padding {
                  padding: 25px 10px 10px !important;
              }
  
              #u_content_text_7 .v-container-padding-padding {
                  padding: 0px 10px 1px !important;
              }
  
              #u_content_text_7 .v-text-align {
                  text-align: center !important;
              }
  
              #u_content_text_6 .v-container-padding-padding {
                  padding: 0px 10px !important;
              }
  
              #u_content_text_6 .v-text-align {
                  text-align: center !important;
              }
  
              #u_content_text_5 .v-container-padding-padding {
                  padding: 10px 30px 25px 10px !important;
              }
  
              #u_content_text_14 .v-container-padding-padding {
                  padding: 25px 10px 10px 15px !important;
              }
  
              #u_content_text_14 .v-text-align {
                  text-align: center !important;
              }
  
              #u_content_text_13 .v-text-align {
                  text-align: center !important;
              }
  
              #u_content_text_18 .v-text-align {
                  text-align: center !important;
              }
  
              #u_content_text_19 .v-text-align {
                  text-align: center !important;
              }
  
              #u_content_text_15 .v-text-align {
                  text-align: center !important;
              }
  
              #u_content_text_16 .v-text-align {
                  text-align: center !important;
              }
  
              #u_content_text_12 .v-text-align {
                  text-align: center !important;
              }
  
              #u_content_text_17 .v-container-padding-padding {
                  padding: 0px 15px 10px !important;
              }
  
              #u_content_text_17 .v-text-align {
                  text-align: center !important;
              }
  
              #u_content_text_21 .v-text-align {
                  text-align: center !important;
              }
  
              #u_content_text_22 .v-text-align {
                  text-align: center !important;
              }
  
              #u_content_text_23 .v-text-align {
                  text-align: center !important;
              }
  
              #u_content_text_20 .v-text-align {
                  text-align: center !important;
              }
  
              #u_content_text_72 .v-text-align {
                  text-align: center !important;
              }
  
              #u_content_text_74 .v-text-align {
                  text-align: center !important;
              }
  
              #u_content_text_75 .v-text-align {
                  text-align: center !important;
              }
  
              #u_content_text_76 .v-text-align {
                  text-align: center !important;
              }
  
              #u_content_text_68 .v-text-align {
                  text-align: center !important;
              }
  
              #u_content_text_69 .v-text-align {
                  text-align: center !important;
              }
          }
      </style>
  
  
  
      <!--[if !mso]><!-->
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet"
          type="text/css">
      <link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet" type="text/css">
      <!--<![endif]-->
  
  </head>
  
  <body class="clean-body u_body"
      style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
      <!--[if IE]><div class="ie-container"><![endif]-->
      <!--[if mso]><div class="mso-container"><![endif]-->
      <table
          style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%"
          cellpadding="0" cellspacing="0">
          <tbody>
              <tr style="vertical-align: top">
                  <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
                      <div class="u-row-container" style="padding: 0px;background-color: transparent">
                          <div class="u-row"
                              style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #d9eef8;">
                              <div
                                  style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #d9eef8;"><![endif]-->
  
                                  <!--[if (mso)|(IE)]><td align="center" width="598" style="width: 598px;padding: 0px;border-top: 0px solid transparent;border-left: 1px solid #2cb4f3;border-right: 1px solid #2cb4f3;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                  <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                      <div style="height: 100%;width: 100% !important;">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div
                                              style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 1px solid #2cb4f3;border-right: 1px solid #2cb4f3;border-bottom: 0px solid transparent;">
                                              <!--<![endif]-->
  
                                              <table id="u_content_text_87" style="font-family:'Montserrat',sans-serif;"
                                                  role="presentation" cellpadding="0" cellspacing="0" width="100%"
                                                  border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td class="v-container-padding-padding"
                                                              style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 10px 15px;font-family:'Montserrat',sans-serif;"
                                                              align="left">
  
                                                              <div class="v-text-align"
                                                                  style="font-size: 14px; color: #34495e; line-height: 140%; text-align: left; word-wrap: break-word;">
                                                                  <p style="font-size: 14px; line-height: 140%;"><span
                                                                          style="font-size: 16px; line-height: 22.4px;"><strong><span
                                                                                  style="font-family: Montserrat, sans-serif; line-height: 22.4px; font-size: 16px;">Hi
                                                                                  ${req.order.user.firstName},</span></strong></span>
                                                                  </p>
                                                              </div>
  
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
  
                                              <table id="u_content_text_88" style="font-family:'Montserrat',sans-serif;"
                                                  role="presentation" cellpadding="0" cellspacing="0" width="100%"
                                                  border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td class="v-container-padding-padding"
                                                              style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 10px 15px;font-family:'Montserrat',sans-serif;"
                                                              align="left">
  
                                                              <div class="v-text-align"
                                                                  style="font-size: 14px; color: #34495e; line-height: 150%; text-align: left; word-wrap: break-word;">
                                                                  <p style="font-size: 14px; line-height: 150%;"><span
                                                                          style="font-family: Lato, sans-serif; font-size: 14px; line-height: 21px;"><span
                                                                              style="font-size: 16px; line-height: 24px;"> This
                                                                              is just to remind you that payment
                                                                              on<strong><span
                                                                                      style="color: #e67e23; font-size: 16px; line-height: 24px;">
                                                                                      <span
                                                                                          style="font-size: 18px; line-height: 27px;">order
                                                                                          ${req.order.orderNb}</span></span></strong>,
                                                                              is just confirmed</span></span></p>
                                                              </div>
  
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
  
                                              <!--[if (!mso)&(!IE)]><!-->
                                          </div><!--<![endif]-->
                                      </div>
                                  </div>
                                  <!--[if (mso)|(IE)]></td><![endif]-->
                                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                              </div>
                          </div>
                      </div>
  
  
  
                      <div class="u-row-container" style="padding: 0px;background-color: transparent">
                          <div class="u-row"
                              style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #044494;">
                              <div
                                  style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #044494;"><![endif]-->
  
                                  <!--[if (mso)|(IE)]><td align="center" width="200" style="width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                  <div class="u-col u-col-33p33"
                                      style="max-width: 320px;min-width: 200px;display: table-cell;vertical-align: top;">
                                      <div style="height: 100%;width: 100% !important;">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div
                                              style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                              <!--<![endif]-->
  
                                              <table id="u_content_heading_2" style="font-family:'Montserrat',sans-serif;"
                                                  role="presentation" cellpadding="0" cellspacing="0" width="100%"
                                                  border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td class="v-container-padding-padding"
                                                              style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 10px;font-family:'Montserrat',sans-serif;"
                                                              align="left">
  
                                                              <h1 class="v-text-align"
                                                                  style="margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-family: 'Montserrat',sans-serif; font-size: 22px; font-weight: 400;">
                                                                  <strong>INVOICE</strong>
                                                              </h1>
  
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
  
                                              <!--[if (!mso)&(!IE)]><!-->
                                          </div><!--<![endif]-->
                                      </div>
                                  </div>
                                  <!--[if (mso)|(IE)]></td><![endif]-->
                                  <!--[if (mso)|(IE)]><td align="center" width="200" style="width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                  <div class="u-col u-col-33p33"
                                      style="max-width: 320px;min-width: 200px;display: table-cell;vertical-align: top;">
                                      <div style="height: 100%;width: 100% !important;">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div
                                              style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                              <!--<![endif]-->
  
                                              <table id="u_content_text_7" style="font-family:'Montserrat',sans-serif;"
                                                  role="presentation" cellpadding="0" cellspacing="0" width="100%"
                                                  border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td class="v-container-padding-padding"
                                                              style="overflow-wrap:break-word;word-break:break-word;padding:0px 30px 1px 10px;font-family:'Montserrat',sans-serif;"
                                                              align="left">
  
  
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
  
  
                                              <!--[if (!mso)&(!IE)]><!-->
                                          </div><!--<![endif]-->
                                      </div>
                                  </div>
                                  <!--[if (mso)|(IE)]></td><![endif]-->
                                  <!--[if (mso)|(IE)]><td align="center" width="200" style="width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                  <div class="u-col u-col-33p33"
                                      style="max-width: 320px;min-width: 200px;display: table-cell;vertical-align: top;">
                                      <div style="height: 100%;width: 100% !important;">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div
                                              style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                              <!--<![endif]-->
  
                                              <table id="u_content_text_5" style="font-family:'Montserrat',sans-serif;"
                                                  role="presentation" cellpadding="0" cellspacing="0" width="100%"
                                                  border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td class="v-container-padding-padding"
                                                              style="overflow-wrap:break-word;word-break:break-word;padding:20px 30px 1px 10px;font-family:'Montserrat',sans-serif;"
                                                              align="left">
  
                                                              <div class="v-text-align"
                                                                  style="font-size: 14px; color: #ffffff; line-height: 140%; text-align: right; word-wrap: break-word;">
                                                                  <p style="font-size: 14px; line-height: 140%;"><span
                                                                          style="font-size: 16px; line-height: 22.4px; font-family: Montserrat, sans-serif;">${req.order.restaurantFK.nameRes}</span>
                                                                  </p>
                                                                  <p style="font-size: 14px; line-height: 140%;"><span
                                                                          style="font-size: 16px; line-height: 22.4px; font-family: Montserrat, sans-serif;">${req.order.restaurantFK.address}</span>
                                                                  </p>
                                                              </div>
  
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
  
                                              <!--[if (!mso)&(!IE)]><!-->
                                          </div><!--<![endif]-->
                                      </div>
                                  </div>
                                  <!--[if (mso)|(IE)]></td><![endif]-->
                                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                              </div>
                          </div>
                      </div>
  
  
  
                      <div class="u-row-container" style="padding: 0px;background-color: transparent">
                          <div class="u-row"
                              style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                              <div
                                  style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
  
                                  <!--[if (mso)|(IE)]><td align="center" width="200" style="width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                  <div class="u-col u-col-33p33"
                                      style="max-width: 320px;min-width: 200px;display: table-cell;vertical-align: top;">
                                      <div style="height: 100%;width: 100% !important;">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div
                                              style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                              <!--<![endif]-->
  
                                              <table id="u_content_text_14" style="font-family:'Montserrat',sans-serif;"
                                                  role="presentation" cellpadding="0" cellspacing="0" width="100%"
                                                  border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td class="v-container-padding-padding"
                                                              style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 10px 15px;font-family:'Montserrat',sans-serif;"
                                                              align="left">
  
                                                              <div class="v-text-align"
                                                                  style="font-size: 14px; color: #b2b0b0; line-height: 140%; text-align: left; word-wrap: break-word;">
                                                                  <p style="font-size: 14px; line-height: 140%;">
                                                                      <strong><span
                                                                              style="font-size: 16px; line-height: 22.4px;">Billed
                                                                              To </span></strong>
                                                                  </p>
                                                              </div>
  
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
  
                                              <table id="u_content_text_13" style="font-family:'Montserrat',sans-serif;"
                                                  role="presentation" cellpadding="0" cellspacing="0" width="100%"
                                                  border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td class="v-container-padding-padding"
                                                              style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 10px 15px;font-family:'Montserrat',sans-serif;"
                                                              align="left">
  
                                                              <div class="v-text-align"
                                                                  style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
                                                                  <p style="font-size: 14px; line-height: 140%;"><span
                                                                          style="font-size: 16px; line-height: 22.4px;">${req.order.user.firstName} ${req.order.user.lastName},</span>
                                                                  </p>
                                                              </div>
  
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
  
                                              <!--[if (!mso)&(!IE)]><!-->
                                          </div><!--<![endif]-->
                                      </div>
                                  </div>
                                  <!--[if (mso)|(IE)]></td><![endif]-->
                                  <!--[if (mso)|(IE)]><td align="center" width="200" style="width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                  <div class="u-col u-col-33p33"
                                      style="max-width: 320px;min-width: 200px;display: table-cell;vertical-align: top;">
                                      <div style="height: 100%;width: 100% !important;">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div
                                              style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                              <!--<![endif]-->
  
                                              <table id="u_content_text_18" style="font-family:'Montserrat',sans-serif;"
                                                  role="presentation" cellpadding="0" cellspacing="0" width="100%"
                                                  border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td class="v-container-padding-padding"
                                                              style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 5px 15px;font-family:'Montserrat',sans-serif;"
                                                              align="left">
  
                                                              <div class="v-text-align"
                                                                  style="font-size: 14px; color: #b2b0b0; line-height: 140%; text-align: left; word-wrap: break-word;">
                                                                  <p style="font-size: 14px; line-height: 140%;">
                                                                      <strong><span
                                                                              style="font-size: 16px; line-height: 22.4px;">Invoice
                                                                              Number</span></strong>
                                                                  </p>
                                                              </div>
  
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
  
                                              <table id="u_content_text_19" style="font-family:'Montserrat',sans-serif;"
                                                  role="presentation" cellpadding="0" cellspacing="0" width="100%"
                                                  border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td class="v-container-padding-padding"
                                                              style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 5px 15px;font-family:'Montserrat',sans-serif;"
                                                              align="left">
  
                                                              <div class="v-text-align"
                                                                  style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
                                                                  <p style="font-size: 14px; line-height: 140%;"><span
                                                                          style="font-size: 16px; line-height: 22.4px;">${invoiceNb}</span>
                                                                  </p>
                                                              </div>
  
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
  
                                              <table id="u_content_text_15" style="font-family:'Montserrat',sans-serif;"
                                                  role="presentation" cellpadding="0" cellspacing="0" width="100%"
                                                  border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td class="v-container-padding-padding"
                                                              style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 5px 15px;font-family:'Montserrat',sans-serif;"
                                                              align="left">
  
                                                              <div class="v-text-align"
                                                                  style="font-size: 14px; color: #b2b0b0; line-height: 140%; text-align: left; word-wrap: break-word;">
                                                                  <p style="font-size: 14px; line-height: 140%;">
                                                                      <strong><span
                                                                              style="font-size: 16px; line-height: 22.4px;">Date
                                                                              Of Issue</span></strong>
                                                                  </p>
                                                              </div>
  
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
  
                                              <table id="u_content_text_16" style="font-family:'Montserrat',sans-serif;"
                                                  role="presentation" cellpadding="0" cellspacing="0" width="100%"
                                                  border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td class="v-container-padding-padding"
                                                              style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 5px 15px;font-family:'Montserrat',sans-serif;"
                                                              align="left">
  
                                                              <div class="v-text-align"
                                                                  style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
                                                                  <p style="font-size: 14px; line-height: 140%;"><span
                                                                          style="font-size: 16px; line-height: 22.4px;">${moment(req.order.date).format('DD/MM/YYYY')}</span>
                                                                  </p>
                                                              </div>
  
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
  
                                              <!--[if (!mso)&(!IE)]><!-->
                                          </div><!--<![endif]-->
                                      </div>
                                  </div>
                                  <!--[if (mso)|(IE)]></td><![endif]-->
                                  <!--[if (mso)|(IE)]><td align="center" width="200" style="width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                  <div class="u-col u-col-33p33"
                                      style="max-width: 320px;min-width: 200px;display: table-cell;vertical-align: top;">
                                      <div style="height: 100%;width: 100% !important;">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div
                                              style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                              <!--<![endif]-->
  
                                              <table id="u_content_text_12" style="font-family:'Montserrat',sans-serif;"
                                                  role="presentation" cellpadding="0" cellspacing="0" width="100%"
                                                  border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td class="v-container-padding-padding"
                                                              style="overflow-wrap:break-word;word-break:break-word;padding:20px 15px 5px;font-family:'Montserrat',sans-serif;"
                                                              align="left">
  
                                                              <div class="v-text-align"
                                                                  style="font-size: 14px; color: #b2b0b0; line-height: 140%; text-align: right; word-wrap: break-word;">
                                                                  <p style="font-size: 14px; line-height: 140%;">
                                                                      <strong><span
                                                                              style="font-size: 16px; line-height: 22.4px;">Invoice
                                                                              Total</span></strong>
                                                                  </p>
                                                              </div>
  
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
  
                                              <table id="u_content_text_17" style="font-family:'Montserrat',sans-serif;"
                                                  role="presentation" cellpadding="0" cellspacing="0" width="100%"
                                                  border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td class="v-container-padding-padding"
                                                              style="overflow-wrap:break-word;word-break:break-word;padding:0px 15px 5px;font-family:'Montserrat',sans-serif;"
                                                              align="left">
  
                                                              <div class="v-text-align"
                                                                  style="font-size: 14px; line-height: 140%; text-align: right; word-wrap: break-word;">
                                                                  <p style="font-size: 14px; line-height: 140%;"><span
                                                                          style="color: #0d83dd; font-size: 14px; line-height: 19.6px;"><strong><span
                                                                                  style="font-size: 20px; line-height: 28px;">${req.order.totalPrice}$ </span></strong></span>
                                                                  </p>
                                                              </div>
  
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
  
                                              <!--[if (!mso)&(!IE)]><!-->
                                          </div><!--<![endif]-->
                                      </div>
                                  </div>
                                  <!--[if (mso)|(IE)]></td><![endif]-->
                                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                              </div>
                         
                          <div class="box-wrap">
                              <div class="table-wrap">
                                  <table class="table">
                                      <thead>
                                          <tr class="tr">
                                              <th class="th">#</th>
                                              <th class="th">Quantity</th>
                                              <th class="th">Product name</th>
                                              <th class="th">Unit price</th>
                                              <th class="th">Total product price</th>
                                          </tr>
                                      </thead>
                                      ${req.order.cartOrderFK.map((item, index) => (
                `<tbody class="tbody">
                                          <tr class="tr">
                                            <td class="td">${index}</td>
                                            <td class="td">${item.quantityProduct.map((item_, index_) => (
                    `<p ${key = index_}>
                                              ${item_}
                                              <br /> <br/>
                                            </p>`
                ))}</td>
                                           
                                            <td class="td">
                                                 ${item.productFK.map((product, indexProduit) => (
                    `<p ${key = indexProduit} >${product.name} <br/> <br/></p>`
                ))}
                                             </td> 
                                            
                                            
                                             <td class="td">
                                             ${item.productFK.map((product) => (
                    `  <p> ${product.price} <br/><br/></p> `
                ))}
                                             </td> 

                                             <td class="td">
<<<<<<< HEAD
<<<<<<< HEAD
                                               <p> 
                                                  ${item.quantityProduct.map((item_)=>(item.productFK.map((j)=>( `<p>${j.price * item_}</p>`)))) } 
                                                </p>
=======
                                             <p> 
                                             ${item.quantityProduct.reduce((item_) =>
                    (item.productFK.map((j) => (`<p>${j.price * item_}</p>`)))
                )}                                                 
                                             </p>
>>>>>>> origin/features/updateOrder_request
                                             </td>
                                             
                                            
                                            
=======
                                             <p> 
                                             ${item.quantityProduct.reduce((item_) => 
                                               (item.productFK.map((j) => (`<p>${j.price * item_}</p>`)))
                                               )}    
                                                  
                                           </p>
                                             </td>
>>>>>>> origin/features/traiter_cancelOrder
                                            
                                          </tr>
                                         
                                        </tbody>`
            ))}
                                      
                                  </table>
                              </div>
                          </div>
                         
  
  
                      <div class="u-row-container" style="padding: 0px;background-color: transparent">
                          
                          <div class="u-row"
                              style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #044494;">
                             
                             
                              <div
                                  style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #044494;"><![endif]-->
  
                                  <!--[if (mso)|(IE)]><td align="center" width="179" style="width: 179px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                  <div class="u-col u-col-29p84"
                                      style="max-width: 320px;min-width: 179.04px;display: table-cell;vertical-align: top;">
                                      <div style="height: 100%;width: 100% !important;">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div
                                              style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                              <!--<![endif]-->
  
                                              <table class="hide-mobile" style="font-family:'Montserrat',sans-serif;"
                                                  role="presentation" cellpadding="0" cellspacing="0" width="100%"
                                                  border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td class="v-container-padding-padding"
                                                              style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;"
                                                              align="left">
  
                                                              <table height="0px" align="center" border="0"
                                                                  cellpadding="0" cellspacing="0" width="100%"
                                                                  style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                                  <tbody>
                                                                      <tr style="vertical-align: top">
                                                                          <td
                                                                              style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                                              <span>&#160;</span>
                                                                          </td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
  
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
  
                                              <!--[if (!mso)&(!IE)]><!-->
                                          </div><!--<![endif]-->
                                      </div>
                                  </div>
                                  <!--[if (mso)|(IE)]></td><![endif]-->
                                  <!--[if (mso)|(IE)]><td align="center" width="115" style="width: 115px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                  <div class="u-col u-col-19p33"
                                      style="max-width: 320px;min-width: 115.98px;display: table-cell;vertical-align: top;">
                                      <div style="height: 100%;width: 100% !important;">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div
                                              style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                              <!--<![endif]-->
  
                                              <table class="hide-mobile" style="font-family:'Montserrat',sans-serif;"
                                                  role="presentation" cellpadding="0" cellspacing="0" width="100%"
                                                  border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td class="v-container-padding-padding"
                                                              style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;"
                                                              align="left">
  
                                                              <table height="0px" align="center" border="0"
                                                                  cellpadding="0" cellspacing="0" width="100%"
                                                                  style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                                  <tbody>
                                                                      <tr style="vertical-align: top">
                                                                          <td
                                                                              style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                                              <span>&#160;</span>
                                                                          </td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
  
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
  
                                              <!--[if (!mso)&(!IE)]><!-->
                                          </div><!--<![endif]-->
                                      </div>
                                  </div>
                                  <!--[if (mso)|(IE)]></td><![endif]-->
                                  <!--[if (mso)|(IE)]><td align="center" width="141" style="width: 141px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                  <div class="u-col u-col-23p66"
                                      style="max-width: 320px;min-width: 141.96px;display: table-cell;vertical-align: top;">
                                      <div style="height: 100%;width: 100% !important;">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div
                                              style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                              <!--<![endif]-->
  
                                              <table id="u_content_text_68" style="font-family:'Montserrat',sans-serif;"
                                                  role="presentation" cellpadding="0" cellspacing="0" width="100%"
                                                  border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td class="v-container-padding-padding"
                                                              style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 5px;font-family:'Montserrat',sans-serif;"
                                                              align="left">
  
                                                              <div class="v-text-align"
                                                                  style="font-size: 14px; color: #ffffff; line-height: 140%; text-align: left; word-wrap: break-word;">
                                                                  <p style="font-size: 14px; line-height: 140%;"><span
                                                                          style="font-size: 16px; line-height: 22.4px;"><strong>Total</strong></span>
                                                                  </p>
                                                              </div>
  
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
  
                                              <!--[if (!mso)&(!IE)]><!-->
                                          </div><!--<![endif]-->
                                      </div>
                                  </div>
                                  <!--[if (mso)|(IE)]></td><![endif]-->
                                  <!--[if (mso)|(IE)]><td align="center" width="163" style="width: 163px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                  <div class="u-col u-col-27p17"
                                      style="max-width: 320px;min-width: 163.02px;display: table-cell;vertical-align: top;">
                                      <div style="height: 100%;width: 100% !important;">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div
                                              style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                              <!--<![endif]-->
  
                                              <table id="u_content_text_69" style="font-family:'Montserrat',sans-serif;"
                                                  role="presentation" cellpadding="0" cellspacing="0" width="100%"
                                                  border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td class="v-container-padding-padding"
                                                              style="overflow-wrap:break-word;word-break:break-word;padding:10px 15px 10px 10px;font-family:'Montserrat',sans-serif;"
                                                              align="left">
  
                                                              <div class="v-text-align"
                                                                  style="font-size: 14px; color: #ffffff; line-height: 140%; text-align: right; word-wrap: break-word;">
                                                                  <p style="font-size: 14px; line-height: 140%;"><span
                                                                          style="font-size: 18px; line-height: 25.2px;"><strong>${req.order.totalPrice}
                                                                              $</strong></span></p>
                                                              </div>
  
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
  
                                              <!--[if (!mso)&(!IE)]><!-->
                                          </div><!--<![endif]-->
                                      </div>
                                  </div>
                                  <!--[if (mso)|(IE)]></td><![endif]-->
                                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                              </div>
                          </div>
                      </div>
  
  
  
                      <div class="u-row-container" style="padding: 0px;background-color: transparent">
                          <div class="u-row"
                              style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #d9eef8;">
                              <div
                                  style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #d9eef8;"><![endif]-->
  
                                  <!--[if (mso)|(IE)]><td align="center" width="598" style="width: 598px;padding: 0px;border-top: 0px solid transparent;border-left: 1px solid #2cb4f3;border-right: 1px solid #2cb4f3;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                  <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                      <div style="height: 100%;width: 100% !important;">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div
                                              style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 1px solid #2cb4f3;border-right: 1px solid #2cb4f3;border-bottom: 0px solid transparent;">
                                              <!--<![endif]-->
  
                                              <table style="font-family:'Montserrat',sans-serif;" role="presentation"
                                                  cellpadding="0" cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td class="v-container-padding-padding"
                                                              style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 30px 15px;font-family:'Montserrat',sans-serif;"
                                                              align="left">
  
                                                              <div class="v-text-align"
                                                                  style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
                                                                  <p style="font-size: 14px; line-height: 140%;"><span
                                                                          style="font-size: 16px; line-height: 22.4px;">Thanks,</span><br /><span
                                                                          style="font-size: 16px; line-height: 22.4px;">${req.order.restaurantFK.nameRes}
                                                                          family</span></p>
                                                              </div>
  
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
  
                                              <!--[if (!mso)&(!IE)]><!-->
                                          </div><!--<![endif]-->
                                      </div>
                                  </div>
                                  <!--[if (mso)|(IE)]></td><![endif]-->
                                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                              </div>
                          </div>
                      </div>
  
  
                      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  </td>
              </tr>
          </tbody>
      </table>
      <!--[if mso]></div><![endif]-->
      <!--[if IE]></div><![endif]-->
  </body>
  
  </html>

            `
        };

        transporter.sendMail(options, function (err, info) {
            console.log("payment cash confirmation", invoiceNb)

            if (err) {
                // return res.status(400).json({ error: "Error confirmation payment" + err });
                console.log("Error confirmation payment" + err);
            } else {

                // return res.status(200).json({ message: "An email has been sent" });
                console.log("An email has been sent");

            }
        });

    }
}

module.exports = invoiceToSend;