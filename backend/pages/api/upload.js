import cloudinary from 'cloudinary';
import multiparty from 'multiparty';

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
    try {
        const form = new multiparty.Form();
        const { files } = await new Promise((resolve, reject) => {
            form.parse(req, (err, _fields, parsedFiles) => {
                if (err) return reject(err);
                resolve({ files: parsedFiles });
            });
        });

        const uploaded = files?.file;
        if (!uploaded) {
            return res.status(400).json({
                message: 'Missing file field. Expected multipart form field name "file".',
            });
        }

        const filesArray = Array.isArray(uploaded) ? uploaded : [uploaded];

        const links = [];
        for (const file of filesArray) {
            const result = await cloudinary.v2.uploader.upload(file.path, {
                folder: 'blog',
                public_id: `file_${Date.now()}_${Math.random().toString(16).slice(2)}`,
                resource_type: 'auto',
            });

            links.push(result.secure_url);
        }

        return res.json({ links });
    } catch (error) {
        console.error('Error in upload handler:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}


export const config = {
    api: {
        bodyParser: false,
    },
};