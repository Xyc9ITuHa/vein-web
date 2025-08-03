// scripts/generatePhotos.js
// This is pure CommonJS - no ES modules bullshit!

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting photo generation...');

// Import image-size - handle both default and named exports
let sizeOf;
try {
  const imageSizeModule = require('image-size');
  // Handle both CommonJS and ES module exports
  sizeOf = imageSizeModule.default || imageSizeModule;
} catch (error) {
  console.error('❌ Failed to load image-size:', error.message);
  process.exit(1);
}

function generatePhotosJson() {
  // Use __dirname (works in CommonJS)
  const scriptDir = __dirname;
  const projectRoot = path.dirname(scriptDir);

  const imagesDir = path.join(projectRoot, 'public', 'images', 'gallery');
  const outputFile = path.join(projectRoot, 'src', 'data', 'photos.json');

  console.log('📁 Script directory:', scriptDir);
  console.log('📁 Project root:', projectRoot);
  console.log('🔍 Looking for images in:', imagesDir);
  console.log('📝 Will output to:', outputFile);

  try {
    // Check if images directory exists
    if (!fs.existsSync(imagesDir)) {
      console.error(`❌ Images directory doesn't exist: ${imagesDir}`);
      console.log('');
      console.log('🛠️  FIX THIS:');
      console.log('   mkdir -p public/images/gallery');
      console.log(
        '   # Then put your .jpg/.png files in public/images/gallery/'
      );
      process.exit(1);
    }

    // Create output directory if needed
    const outputDir = path.dirname(outputFile);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
      console.log('📁 Created output directory:', outputDir);
    }

    // Read all files
    const files = fs.readdirSync(imagesDir);
    console.log('📂 All files found:', files);

    // Filter for image files
    const imageFiles = files.filter((file) => {
      const isImage = /\.(jpg|jpeg|png|webp|gif|bmp|tiff)$/i.test(file);
      console.log(`   ${file} -> ${isImage ? '✅ Image' : '❌ Skip'}`);
      return isImage;
    });

    if (imageFiles.length === 0) {
      console.log('');
      console.log('❌ No image files found!');
      console.log(
        '🔍 Looking for: .jpg, .jpeg, .png, .webp, .gif, .bmp, .tiff'
      );
      console.log('📁 In directory:', imagesDir);
      process.exit(1);
    }

    console.log('');
    console.log(`📸 Processing ${imageFiles.length} images...`);

    const photos = imageFiles.map((file, index) => {
      console.log(`   Processing ${index + 1}/${imageFiles.length}: ${file}`);

      const filePath = path.join(imagesDir, file);

      // Get real dimensions using image-size
      let width, height;
      try {
        // Read file as buffer for image-size
        const imageBuffer = fs.readFileSync(filePath);
        const dimensions = sizeOf(imageBuffer);
        width = dimensions.width;
        height = dimensions.height;
        console.log(`     📐 Dimensions: ${width}x${height}`);
      } catch (error) {
        console.log(`     ⚠️  Error reading ${file}:`, error.message);
        console.log(`     📐 Using fallback dimensions: 800x600`);
        width = 800;
        height = 600;
      }

      // Generate clean alt text
      const altText = file
        .replace(/\.(jpg|jpeg|png|webp|gif|bmp|tiff)$/i, '') // Remove extension
        .replace(/[-_]/g, ' ') // Replace dashes/underscores with spaces
        .replace(/\b\w/g, (letter) => letter.toUpperCase()); // Capitalize words

      return {
        src: `/vein-web/images/gallery/${file}`,
        width: width,
        height: height,
        alt: altText,
      };
    });

    // Create the final JSON
    const output = {
      photos: photos,
      generated: new Date().toISOString(),
      count: photos.length,
      note: 'Generated automatically by generatePhotos.js',
    };

    // Write the file
    fs.writeFileSync(outputFile, JSON.stringify(output, null, 2));

    console.log('');
    console.log('🎉 SUCCESS!');
    console.log(`✅ Generated ${photos.length} photos`);
    console.log(`📝 Output file: ${outputFile}`);
    console.log('');
    console.log('🚀 Usage in your component:');
    console.log('   import photosData from "../data/photos.json";');
    console.log('   const photos = photosData.photos;');
    console.log('');
  } catch (error) {
    console.error('');
    console.error('💥 ERROR:', error.message);
    console.error('');
    if (
      error.code === 'MODULE_NOT_FOUND' &&
      error.message.includes('image-size')
    ) {
      console.error('🔧 image-size not found! Install it:');
      console.error('   npm install image-size');
    } else {
      console.error('🔧 Common fixes:');
      console.error('   1. Make sure public/images/gallery/ exists');
      console.error('   2. Make sure you have image files in that folder');
      console.error('   3. Check file permissions');
      console.error('   4. Try: npm install image-size');
      console.error('   5. Try: rm -rf node_modules && npm install');
    }
    console.error('');
    process.exit(1);
  }
}

// Just run the damn function
generatePhotosJson();
