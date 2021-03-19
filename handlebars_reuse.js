//Generate Footer
const footer = document.getElementbyID('footer');

const footerText = `Tina Lüdtke | <a href="mailto:tina@kickoke.com">tina@kickoke.com</a> | <a href="https://www.linkedin.com/in/tina-luedtke/">LinkedIn</a> <br />
2021`;

const compiledFooter = Handlebars.compile((footer.innerHTML = footerText));
