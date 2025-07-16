import { server } from './app.setup.js';
import { connectToDatabase } from './common/db.common.js';

(async () => {
  try {
    await connectToDatabase();
    server.listen(3000, () => {
      console.info(`Server is running on port ${3000}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
