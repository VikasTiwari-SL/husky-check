import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query';

import { Queryparent } from './query-components/Queryparent';
import Parentfilter from './myusememoexp/Parentfilter';
import Filter from './Filterexp/Filter';
import { useState } from 'react';

const queryClient = new QueryClient();
type Options = {
  urlValue: string;
  displayName: string;
  displayProperties?: object;
};
export type Filters = {
  type: string;
  options: Options[];
  urlKey: string;
  withInfiniteScroll?: boolean;
  isFetchingNextPage?: boolean;
  isOptionsLoading?: boolean;
}[];
export function App() {
  const filters: Filters = [
    {
      type: 'string',
      options: [
        {
          displayName: 'payment confirmed',
          urlValue: 'payment_confirmed',
        },
        {
          displayName: 'partial payment',
          urlValue: 'partial_payment',
        },
        {
          displayName: 'order confirmed',
          urlValue: 'order_confirmed',
        },
        {
          displayName: 'in progress',
          urlValue: 'in_progress',
        },
        {
          displayName: 'out for delivery',
          urlValue: 'out_for_delivery',
        },
        {
          displayName: 'completed',
          urlValue: 'completed',
        },
        {
          displayName: 'confirmed receipt',
          urlValue: 'confirmed_receipt',
        },
        {
          displayName: 'error',
          urlValue: 'error',
        },
        {
          displayName: 'canceled',
          urlValue: 'canceled',
        },
      ],
      urlKey: 'order_status',
    },
    {
      type: 'string',
      options: [
        {
          displayName: 'Rxs',
          urlValue: 'new',
        },
        {
          displayName: 'Refill',
          urlValue: 'refill',
        },
      ],
      urlKey: 'order_type',
    },
    {
      type: 'string',
      options: [
        {
          urlValue: 'c2Qr6iXo',
          displayName: 'Sanket Provider',
          displayProperties: {
            profile:
              'https://storage.googleapis.com/brite-stg/profile-picture/ChGGXoUG.jpeg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=github-actions%40airy-box-370216.iam.gserviceaccount.com%2F20231003%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231003T103842Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=25365fec1a34257e39777ee82ec30988d98b335cff62876229377761ba35a898fa6dbdec96cb4c4b179853f9b3f5e51d32eb3ac5597cd6ecc6fada5fa552e0ae7a6576eb825d11e048302d563dc7d4bd40c745a8b6e1c8360f14e29793cc3d94914afb9405733fc96095aae5a59687f91a80c41cff264c7ba69ee800432ea48ec7e1b87c667f073b2bbf088f1c6023ca51e8d3932a18beaa777dbd4f93621714824be9684cea3dc86e97cc573f9a1efe6fbc328f54f2a429feffefe35c788ae44b803b1fa58c3392d0f714a10d45295d9cba03ee782eec8d1cd755986e3e03e7d7195ca1a56e79756599a5f20a2fc0c24b4f30f55bdef2b1d112e608e3980d5f',
            description: 'sanket+90@steinnlabs.com',
            practiceName: 'TMM Doctor',
          },
        },
        {
          urlValue: 'gpRdBxKD',
          displayName: 'Utkarsh Agarwal',
          displayProperties: {
            profile:
              'https://storage.googleapis.com/brite-stg/profile-picture/6u4dkph6.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=github-actions%40airy-box-370216.iam.gserviceaccount.com%2F20231003%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231003T103843Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=662a5f794ea00c0dbc3d6ec8a1ec6abf67ab6054d96fc6c76843eba82b71b943b2a0e2e7a6419d35c550f0b67bce7e17407c3131ac6fef4ff07c3757b62bb300ca2f4440d2156b935dcf735a08433959f4b28900d7f028f71c380d721d9a930fa0071ac6ea0cd9bcff2cb2c5ed06436fe4020792e8c272b030a78e27651027fb1b2757795ffd9ba69c2d84b6a6cd3c0ae56402620c9db95e109da8b3dc26f37795d783a82487c289b7ecb0e6c42dbc94fa734bc6d8ee585f101a6fdb0e7a4fdef03c656dbbca7c817d49f86627bff2eef0e4e45ed8fcf3e92fc1a8e273a903a8f16c422e8e65114260c7c472b3bac18e644482352bc5517d6de8553290d7f0c6',
            description: 'utkarshagarwal+22@steinnlabs.com',
            practiceName: 'TMM Doctor',
          },
        },
        {
          urlValue: 'fidtEXEt',
          displayName: 'Utkarsh Agarwal',
          displayProperties: {
            profile:
              'https://storage.googleapis.com/brite-stg/profile-picture/cDWKz6Qv.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=github-actions%40airy-box-370216.iam.gserviceaccount.com%2F20231003%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231003T103844Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=9a431bb071942ee5e76ae4c0ca0b5b1cc97ce79f6d019d072a104a734c1c5bc42f1083c4a029ef42cbc9b4f757e940c4821b710ea00f6e054d3671f2bd1f08be24efb186226eccce763fccb7588e4abc14078221073b9ed4ef9198974ff34100f6ca453acf28edac660d55edded887a67e7178bd1dd0a0e6235490cc5bf1d88f6e359149fc33cbf77b765670b274bcd9351860b7e94e0a1facf80d0cde5d7bcdba9b0371b60833b2788d01c72e2e138bbe8365793d88fd4f231156cc1ce11efaf368d3cd88f0de9834f85ea25945442c76c1c8816d3e23de547f3a8314184e8985031f84b3fcabff1d6ba2007135f4853ca48ac01bb5407f3cc493b6391c3f79',
            description: 'utkarshagarwal+21@steinnlabs.com',
            practiceName: 'TMM Doctor',
          },
        },
        {
          urlValue: 'X6fsieZF',
          displayName: 'Utkarsh Agarwal',
          displayProperties: {
            profile:
              'https://storage.googleapis.com/brite-stg/profile-picture/dVdFKCqt.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=github-actions%40airy-box-370216.iam.gserviceaccount.com%2F20231003%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231003T103846Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=0d1d38a1cede16498b439abaf4d4056c12055e222126309cae15482b7f4e9d3a1b45074929f474be3a5b8f524653caf8af317bd6fdda6a75f4ae61a4059cf20c6b39b158c3f8eac123c5d892148f6c76e71a5bf8478393287f7dbf7290414b915d73fda1da681663c6da069ee456737a0afad96d81258f40e1054aeae592da2ba58b17980d517ec3e8ab011142692c3cf120c6bd09dd475a640540155c9108fc3931653c0d4f032db6928f3ede64e6d6a6aeafca737d9f933f32cc6a87a1cacd564c23467062d0228a2f900a240dc68eea37c4c7772728f2ac52e827ac977d7ed5197e37020bdecedb5cb53c001845a07aeb144645464b14d5293135caf72d91',
            description: 'utkarshagarwal+20@steinnlabs.com',
            practiceName: 'TMM Doctor',
          },
        },
        {
          urlValue: 'kGR6d7BG',
          displayName: 'Sas sas',
          displayProperties: {
            profile:
              'https://storage.googleapis.com/brite-stg/profile-picture/n39twrGY.jpeg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=github-actions%40airy-box-370216.iam.gserviceaccount.com%2F20231003%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231003T103846Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=42b61f61d9e32ffb5be6285a62d6ee94509cafb1c0c5751c2b35af116f6185a603bc6c2740f76b1339c7c8875456710b5b9d3810dc9821b26c98006b07dd5c2dc64fb1ee677e6a115e6599c1b05ca6a8ff3a607a74e6a37cf2d7defc7627ffc87cad4b205521054c5474d8aeba4f8bef62599464e137eb7dfc7d4a6da6fecf90b943d09d5dfc158a53041366c5c3daa89c689e21c484db5ea6e17ef3ec37e3ba073872b5cee7805b82d6f77428105125e36806d3e8eb9ce561e3527e45c1218988bc74ed17c9b9d0e8e4fc3a336342a35cdf2560877054540856559306ba45219781467c136032670559cdc5b533aa338e98a6c51932c0aee7e0fac06774340f',
            description: 'sanket+86@steinnlabs.com',
            practiceName: 'TMM Doctor',
          },
        },
        {
          urlValue: '6A8rgc2j',
          displayName: 'aaaa Provider',
          displayProperties: {
            profile:
              'https://storage.googleapis.com/brite-stg/profile-picture/5rJSRmrs.jpeg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=github-actions%40airy-box-370216.iam.gserviceaccount.com%2F20231003%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231003T103847Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=5cae3a582e1993d1dde1ec2f06e26f26a776d51645a76c3e5f08827dfec07528e0d37e17fbb9801f9bd74526399d38a636ec1f066fb90e70b33bc11e23782250ec6d9113a8ad38c67e9c38b0bffcf02eae72fe9e4cd0106a772657f6cbc5da09e8200d382cd949a7bc704e0f1e61f351ac09e44445cfb2bea90528a3cbf6da7cc89b889c8bc6c93369ae88fcdb8e05ff095aa9f36929c8525d74efe00e39791e51d75f74831785a93c212ba59c60ee5fab702a7b21ddaa33eaf660e9d5fbae8efa781230c493dad5adb0c463da04b6ffb0722086e27ff903daba899e712d667aae7bc811d3b1182a17d4278e7b197f132ed69e4a886599d6145d613b7a292783',
            description: 'sanket+87@steinnlabs.com',
            practiceName: 'TMM Doctor',
          },
        },
        {
          urlValue: 'YRvTVmAL',
          displayName: 'Saaaa Provider',
          displayProperties: {
            profile:
              'https://storage.googleapis.com/brite-stg/profile-picture/ReEfFmn7.jpeg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=github-actions%40airy-box-370216.iam.gserviceaccount.com%2F20231003%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231003T103848Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=158047f7fbd51a4f866627be2d5076ee2fb17bc3e4441edcd1661dbd0b77d5cec5708666e8d3295f922dd92d715d9ae2e08e6c3f12a2c920217e6e5281cf1e608bad959ba3cae568bba5fe314f9d15952bccd96d87c6a31e5e2ca31ee956f5169b97324e488edd8f837c213e4e730041c143742694dbbf289b385cbc94ac89b62abe1e7bcf297bb8caf79a4ed652364d3f5fcd80dfbfcd6ad199f329644c9c2abbfcf39fd5fc34eefb0dedd4548996a0bb2f78b7d351eb2783593dfb0154b91d2d1b9f455c2f89961f9da4708e43bb548cf92ac61fc736c82de58c3e09cf9c61c20e625481d18ef55fd74585e61100eea9405c584a01fb11c3f0b5bbe685fbe9',
            description: 'sanket+191@steinnlabs.com',
            practiceName: 'TMM Doctor',
          },
        },
        {
          urlValue: 'H9ifDoCA',
          displayName: 'Sanket medication',
          displayProperties: {
            profile:
              'https://storage.googleapis.com/brite-stg/profile-picture/idszZaef.jpeg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=github-actions%40airy-box-370216.iam.gserviceaccount.com%2F20231003%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231003T103848Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=9d92301a377a7833ed2af3cc874751f7296ca676cc476a5f2887352cbb8b57acdf5b9572ab3114ec6fd7e310ac1f669c0c8feb9063345da8212c73dcd36e17d198d65cfa2c68478e1c65f0aa3007cc40787e5cab5260e5ba80ac0902f7fca0262a16cd7bbc2931c8f1c40e3bb3abf9273657ee999deefd76d4e0bf818b5f9f78549163acaf539c22da106a860eef7ef3a48fe4b0ebd91b05d5ebb617058351a2796d3e4ff6a2468dc7ddc18ff98a8511c239810d72a0399906daa0a4b320f8bec1f852b487ce3e9bc6a48b58ec95d7a1895b71bddf4cd13cd68c84b0a07ae5cdc0ab2dd052df9ece63e3e0b065c957370a703083a1e35dd1d0ef4b87303600d6',
            description: 'sanket+181@steinnlabs.com',
            practiceName: 'TMM Doctor',
          },
        },
        {
          urlValue: 'MLiKzAee',
          displayName: 'sanket provider',
          displayProperties: {
            profile:
              'https://storage.googleapis.com/brite-stg/profile-picture/9qeBeiRd.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=github-actions%40airy-box-370216.iam.gserviceaccount.com%2F20231003%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231003T103849Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=65c654cfa4935efd946c7d11074cf88b21cd478fe7e81289eaab9632254cb0495bd220402529b3661578c8dbbfaf616f198730aeeb52bf92c92c25045891f1c905154150f94527930eb09d6869985bd6fe9405f80cc2b055ce3e039aef386f5081088d157c190f84f3851a2d1db7f5c0c6226efdd4d1d2c62a69fa4f07811196994053fed03516ff0a1b5f0b02d6d79ec9fbfbb42c270b2a310528661f5ed2188cf9768b2716082d2d10cd83e611482ca04cd95b254f3aed4a815b8dfb0cacf5edc868ce7d96560d5b8464c3882d426991757dc2a8d7adff8828e6a3ded870954d510e1e8ff9ea118f8c9a1d75cb3157dfe2248a447be28734ce3768f65ac22a',
            description: 'sanket+85@steinnlabs.com',
            practiceName: 'TMM Doctor',
          },
        },
        {
          urlValue: 'QPuK37gj',
          displayName: 'Sanket All',
          displayProperties: {
            profile:
              'https://storage.googleapis.com/brite-stg/profile-picture/YEz6bCBQ.jpeg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=github-actions%40airy-box-370216.iam.gserviceaccount.com%2F20231003%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231003T103850Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=62d59ee660b12f5e37e322279c731bf1456e70df9cfac401f13bd22150ed1faaf55f60dbc07049b19461731c305e9cb5aa46ed2c5eedafd7ce66ba064435c5e105e9c36059d32f305962b52dee0c2b154010631ff8b793c51022fae7d87ceb27e850dcd8f956c220509500c05000d8058bf94912d7990dd7548326a4235cb8379f5e214b2f3f544da11c440c12306ac01e7272d63e195d559ee0fae3630ba31f86415fef5e2517f3c083684d364fa0f37f618fc4752f22420a38f6152186b93b7cd32017965fa41f77fe11f15f3c8b20d6dd01b4f687b60b77f636ca783c6cc2b9a5a66f789847901fa2b0823b6c7fc2c964bf33a3073d56b5279cc7be021088',
            description: 'sanket+84@steinnlabs.com',
            practiceName: 'TMM Doctor',
          },
        },
      ],
      urlKey: 'patient',
      withInfiniteScroll: true,
      isFetchingNextPage: false,
      isOptionsLoading: false,
    },
    {
      type: 'string',
      options: [
        {
          urlValue: 'eiiEsY5W',
          displayName: 'Practice test t',
          displayProperties: {
            profile:
              'https://storage.googleapis.com/brite-stg/practice-logo/CYxvAE2z.jpeg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=github-actions%40airy-box-370216.iam.gserviceaccount.com%2F20231003%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231003T103841Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=5af3878d76de735698241afd86185a5d2bffbe0003cb8332a5745d465f6ba03dad3892eed7b02b6d65c814dfa0de8ffc0e262af6f34cfab8dac19fed15e62def90b2f0d9486757b291a1d47c4253f936b655a8d5e0d0b83487148373b410d126048bf36c340b9415a1de0ca689e854ad50da2f737dc32db45243f3e34cfeaf855a6bc73f071b320e9c5f447173e12dec33a40ac1fd77a9743f7228e535416d5b7b933b80824f9cf01313fd80152b3fe381111f48d02a61066c4016f3245232df2ab3fc42992272e515c4536a01bd909cdc8a64f24be88755683aab22c63de5dc0e5913553ae6f47a2db3b17862f4b7a3b4f41cfcde1a50cc362185c0eea48c1f',
            description: 'eiiEsY5W',
          },
        },
        {
          urlValue: 'etudauda',
          displayName: 'Lotus Concierge Practice ',
          displayProperties: {
            profile:
              'https://storage.googleapis.com/brite-stg/practice-logo/hQbfnXRQ.jpeg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=github-actions%40airy-box-370216.iam.gserviceaccount.com%2F20231003%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231003T103842Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=652cf69b9b6a14fd15740b235507315c0ea3695a2a0a7865011ab73f6f5e71c26ae938f00e9c8d7b43031ed359c5e48b5942be05ed26362f96968e44ea403fb926312dd3a165788dc144fecfd69a9a55905d6b60a852e62a822a2036cb26662f9ead1e338827cbf8f3d49ed03363c2f4823bd2d70eb81c24453a091d42d4d62c8c0e53d23a526ed69539940cc1954ddeaaca9786fcfe1418c1a98e94c092fc2f2d2d3ee1396a5fef2149a86628efded3150ca2d4464f46d3ed496e7ed69d773e9b06202071679f9569a632faea335547f4cba16da64161e9abe0503f1e379e5ba5dd0fdb8a4c19f784df16388e1f2589e21ea86b8394faf374118d9b61c8b6a8',
            description: 'etudauda',
          },
        },
        {
          urlValue: 'mGKkufnf',
          displayName: 'Practice test',
          displayProperties: {
            profile:
              'https://storage.googleapis.com/brite-stg/practice-logo/U8TKs7ZG.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=github-actions%40airy-box-370216.iam.gserviceaccount.com%2F20231003%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231003T103843Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=018243e771a312e558de98f6f290fd0d36a2e1ad2d0162d26fe7105db43011ca5c4709945b43d9bfc8d64256d03ea18e946e18058a7e6f4df1792007c850ab7d570b3f5cb6bbc146666e6dc46b513a9ccf481d863dbdf65d961a05b13d0377f88b387eb4ea7c541a12d1e66a525299f507e4f0b30fa52415d6a787eacf6159df4cf56beb9bb18a348b49a999d9f4eee698a9131aae43be02eb1d24175dea06fb69d35ed7f545fe9fc0cb360af53c02438c7a774756fd6b90e41a738ee5a46eef7f2db8436f4beed6d6ae7350336cba785e510a101e138e274ec558be40b9614a620caab0dfab0ce23fc03dbf775824655eb64b84cb211fb8139d82f6c1f416bc',
            description: 'mGKkufnf',
          },
        },
        {
          urlValue: '5quk66TH',
          displayName: 'Institute of Bioidentical Medicine',
          displayProperties: {
            profile:
              'https://storage.googleapis.com/brite-stg/practice-logo/BeWsTrDa.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=github-actions%40airy-box-370216.iam.gserviceaccount.com%2F20231003%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231003T103844Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=826de499ab1d8ab3511c530063476f207023848442ef5f45ffa069a2b87a17f0cd742ef2315b9ec5b719417036d658b47a72763dcfd983975f6b2318b4077718b5c7bec3f213bf3d533d4e1a2071e8283ebc835fc52d9e0f32f2bc09e72a9471ec4770683cb99cd8a3b070732071e28e7e4a5303075a02a332e572a7e41b1328a5442821a0f214a2b913bdf33419c575c9d1359d9c3a247d208dcaf6545b948dcd0f439fd698a83b1aeae59ca41aaf3801e2a6cae45d7f77bcbb5d70bb692dedbb96e09665b16625baba234a237f7bab5db4fe6ee9333e3b35c010e660af99c2a7bccb0ca6025471662a00557189dcc64fd4649ab88cf350cd6835a93a41f31e',
            description: '5quk66TH',
          },
        },
        {
          urlValue: 'gCVdet2g',
          displayName: 'Test',
          displayProperties: {
            profile:
              'https://storage.googleapis.com/brite-stg/practice-logo/AfeHS2gN.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=github-actions%40airy-box-370216.iam.gserviceaccount.com%2F20231003%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231003T103846Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=7f788229ff28fc03069408ecf9769ab71f2bee6527481f6360658acf349682164db98f1588dee427b2d72bb2728eca6eab86e7d976f89e52182e89081d103fd8fe9afed0d4a31bed97f65ad1c1ae0c16793eb8fa456fa22a707db8978ed6ed0ea162925ba1d4d5a01c898c17bea965d612c44821d1d60ef53640eff8ea5b1d901d29b8196c1f3c1fde427dd5bbd7bd8223b74cfd47b18237598c1531e87bf49f65bccc66a4e359d667a1b59f87ea060c221074d2eadc147e8a57876edafbee92116bed4d3930b365561ae3e51834e8c5b042f8576d5e6c8e8b6a66cbe535914ed91463244f55eb1b46393c2fc9645082002b5b10a1a142ebea2bb83d359173db',
            description: 'gCVdet2g',
          },
        },
        {
          urlValue: 'ZBZdWd7u',
          displayName: 'Practice cache',
          displayProperties: {
            profile:
              'https://storage.googleapis.com/brite-stg/practice-logo/ACf6E2EM.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=github-actions%40airy-box-370216.iam.gserviceaccount.com%2F20231003%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231003T103846Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=07f86a0d4b9344c24e6462e13be78f116e081d7f777fd5f2199440a4202cb6444fa9a178b8d6930095cf8de824922addf858f2167ccdd94fc17527c64286c963c9761b938f2e498d9b7c314d05ab57d9e44d939a2f14540f91f65e4eeeb2e42e8e9a7c80c3072333f1d0962fdc5e362b2e1adceee241c5c1c3d9fdf00822a18206a0f1f96e9820ff3f09296055df2d4f8c232c39cc92b00f5b569425b0ef88da00da63f7c91c3ec20e61405fe334147be62ec3c08d5a55588982371d81bac7acefceddbec246e980613423081f91d01fcc09e9392cffcc2a5b41d2880528946231a7c347b102d9520fdd05fbc83a2f97c4ecde074846e34fa3f8b14b26027b24',
            description: 'ZBZdWd7u',
          },
        },
        {
          urlValue: 'FUNPvA35',
          displayName: '100% discount practice 5',
          displayProperties: {
            profile:
              'https://storage.googleapis.com/brite-stg/practice-logo/dqJcSUJg.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=github-actions%40airy-box-370216.iam.gserviceaccount.com%2F20231003%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231003T103847Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=449f92b3724636306b3ab278169273bc4808bef25bb3f577ca39fb3adfa6f2e89bde046038fa2c7bbc3a73f7dbb9d865aa4832127803cb6e4d4e1afbf70eea980613fab0068e627db017cfc5b5a38dd6d4219533414b74d7638816737ffc8e70f198961d9276578b592a1824eb985634bed8444b16d51264f43e7a92ff47f6b09a1050cc44e880691ea698a043a58d4857938dd721f8269bc87d9156b81ae6b7f06190f0a7017c330ef24f4521c41d351c1e2bdd10aeb673ebf1f7be374d92a7197eaf5c3eed1c0b7fe7f18cd41641ce5f5320359268b59a71baee0f57824c1debaa42978155fb1aba49b3fcf8f17ed5943bc67b80f643cf9157edfc05ed89cb',
            description: 'FUNPvA35',
          },
        },
        {
          urlValue: 'WYDhKHn7',
          displayName: 'logo prac 2',
          displayProperties: {
            profile:
              'https://storage.googleapis.com/brite-stg/practice-logo/gLCJbWQB.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=github-actions%40airy-box-370216.iam.gserviceaccount.com%2F20231003%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231003T103848Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=3340bde291a805ebce547ecc2b0c94662e6db553726f786a65c4d71d466b523e61bad5f23418cf14194df7340a881e12105092e87835e84cecc1a8768c2ffe0360210c48c4d6dba3ef2eb4e0e60c663f04d920549594a8b3c540a3c0589b1f3b30b6ad606ee1c212d480fe3b6603ff7b8c42dbcd6b4c1193189f660b69e3396d03d6d02527da02a51e7ba1ed746d4bf2d2c10292a67d6b2364778db6a63bc6d78b8a1a068fd517f75653c4fbc1bbd6e6b169934566fdf06376a24fa48aeea50e5ade07cb4da9ea1363507fb612210c14f1b6ccaf2e8bbe2681468e31736d1975c0f055fcc647757278630404c7c7c4b0888f3d176c302de0f66f8305aefb9586',
            description: 'WYDhKHn7',
          },
        },
        {
          urlValue: '3rBPUdiE',
          displayName: 'Test Logo Practice',
          displayProperties: {
            profile:
              'https://storage.googleapis.com/brite-stg/practice-logo/4y9Z6ThG.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=github-actions%40airy-box-370216.iam.gserviceaccount.com%2F20231003%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231003T103848Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=9abc856c494b293def872be2d05f9694dd2e8f7a6cdd80a4f064b27e0ee6246fb3e3511e9eecadf83486df22ae404cb17a9934ae1d81779f641d37eb1e4ece36600e952a633b57fc775cfb983cdf4e0327e3ca7ebf743d618b94139968e4dbb3713cb41745c499a3a1d7991ccdbe5035fa5c119a1b18d56e9bb27a7de41995b53f9794d142e816fd8b2674b4582dac4d4b80682e6122227c65b9b0d21e80c38f753c38d2f2d0e62fa9d71cdbe3b77ef92a27e34bdddb7d3a9010e12ce90ca099c6ea7a8686ac8a083327810eee36c050e0c70d7b6a41a8dc4d4ff29db87dead0e453b0225059f54d2153dbcd05d29ad2fb776a07bd1573f30f3bf33772ff63cc',
            description: '3rBPUdiE',
          },
        },
        {
          urlValue: 'A3xtTkY7',
          displayName: 'Jupyter Concierge',
          displayProperties: {
            profile:
              'https://storage.googleapis.com/brite-stg/practice-logo/Fd46UteF.jpeg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=github-actions%40airy-box-370216.iam.gserviceaccount.com%2F20231003%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231003T103849Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=82ae9bed08c227a1742eb493c74b9477f855d48453e20c1099957cc4b84f0660402c3dcc4542180c79f89eb7b09875dfd3ff4675f048ce212070487b1b38a0b648786f4449bb66525d891882bb54546631901ce82c5e5e59ffb10b15829253ddb85b54289890916e5350b84b2378b56642eaa8549cc0e7486bedd2faf36121734eddaf1185cc8da8546c6a435a57db861d1b35801b3cbbf8df98a2743c1a9a1b51c8f574ed64f017556d8cdca48ce6cf26bb0a49b08a52585ee5abd43eab2fc8d47e678f88517c843e4bcbdcc108bcab21b5a9467ec8f95751cc27ee403e25570af7a91d45a26508c2259130ae03a3ac7fea0dfdc524fa281c1ce5da419cc1f4',
            description: 'A3xtTkY7',
          },
        },
      ],
      urlKey: 'practice',
      withInfiniteScroll: true,
      isFetchingNextPage: false,
      isOptionsLoading: false,
    },
    {
      type: 'string',
      options: [
        {
          urlValue: 'Sanket Provider con',
          displayName: 'Sanket Provider con',
          displayProperties: {
            profile:
              'https://storage.googleapis.com/brite-stg/profile-picture/3eTUnaYu.jpeg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=github-actions%40airy-box-370216.iam.gserviceaccount.com%2F20231003%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231003T103842Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=2c701609569cb69911cfc9202522bdf7771f4b170b7693a232e67e5576327f8db5c2b641893344a45e760bf76c4d4a8c37cb96efac2942fbb2a0cc3053b8c14afeddff94457e53eca29d3ace376c7324b29adb06cf9338f8a23a0108cc0d1195da8fe3b2340a3a940b424247322b0dc5cd71d2d4e5a05e0417819c429dab0428dca55a6bedead5dd1ea0aa66b5b2d5736fcac4937e46e9f92559b108f835cefc74282a117799e148da47e9ffa3c4b192f9d1d6a985428df879fcdb44e8858ce2db2cc0486ed1cb9f39fbe8ef3b2de4e6cf23e4d7efb03014498d5c6ece16dbcd115e01e9604ec8e66875516a9c88806b97e5d2e1317ab2f2ca3a5109020a2cb9',
            description: 'sanket+74@steinnlabs.com',
            practiceName: 'Practice test t',
          },
        },
        {
          urlValue: 'Bhushan Provider',
          displayName: 'Bhushan Provider',
          displayProperties: {
            profile: null,
            description: 'bhushan+provider2@steinnlabs.com',
            practiceName: 'Practice test',
          },
        },
        {
          urlValue: 'Sanket shipping',
          displayName: 'Sanket shipping',
          displayProperties: {
            profile: null,
            description: 'sanket+1c@steinnlabs.com',
            practiceName: 'Prime IV 5',
          },
        },
        {
          urlValue: 'Sanket medication',
          displayName: 'Sanket medication',
          displayProperties: {
            profile: null,
            description: 'sanket+1a@steinnlabs.com',
            practiceName: 'Prime IV 6',
          },
        },
        {
          urlValue: 'Sanket All',
          displayName: 'Sanket All',
          displayProperties: {
            profile: null,
            description: 'sanket+1b@steinnlabs.com',
            practiceName: 'Jupyter Concierge',
          },
        },
        {
          urlValue: 'Abhishek Provider',
          displayName: 'Abhishek Provider',
          displayProperties: {
            profile: null,
            description: 'abhisheklimkarh+1001@steinnlabs.com',
            practiceName: 'Lotus Concierge Practice ',
          },
        },
        {
          urlValue: 'Sanket Provider',
          displayName: 'Sanket Provider',
          displayProperties: {
            profile: null,
            description: 'sanket+1000@steinnlabs.com',
            practiceName: 'Institute of Bioidentical Medicine',
          },
        },
        {
          urlValue: 'Bhushan Dangore',
          displayName: 'Bhushan Dangore',
          displayProperties: {
            profile: null,
            description: 'bhushan+provider1@steinnlabs.com',
            practiceName: 'Prime IV 6',
          },
        },
        {
          urlValue: 'Jeet Patel',
          displayName: 'Jeet Patel',
          displayProperties: {
            profile:
              'https://storage.googleapis.com/brite-stg/profile-picture/GXQLsw2W.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=github-actions%40airy-box-370216.iam.gserviceaccount.com%2F20231003%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231003T103851Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=838df3434b8d3af05ff1c5ffa20a30fe6ce4349a846d4f11844fc07ad9ec4c8254448ed7579aab78fcdbb3a73b3d364a4f2826e4fe0a2ab3d1669c26b822a08d64f1f5502ff00312ba7842dd5d23b30e86ffd6c9bbe62228c93faea6b61fde055dd84c311ad3397fe643246e4eb0a4d6c04795b7a3f34539dbb825a70a96ef241825e17c326a0c96d67f61b1f8d698f905a7ced41fdc340fa0aac8c4c74f659647982cef8df3b33f8e2057838f2f73e5e54fcdbd6f4fb6eda8c4d5e34e92a414d408533eb4f18a8d173f04237951c6e482d0aee036d10df873ac9cf5c4243ede67c116cce421694ba4bdc00587fb5e81d37c2a923fbcbb38bf4295b9a7fcbee7',
            description: 'jeet+10@steinnlabs.com',
            practiceName: 'Practice 8',
          },
        },
        {
          urlValue: 'Jeet Patel',
          displayName: 'Jeet Patel',
          displayProperties: {
            profile: null,
            description: 'jeet+9@steinnlabs.com',
            practiceName: 'Prime IV 6',
          },
        },
      ],
      urlKey: 'provider',
      withInfiniteScroll: true,
      isFetchingNextPage: false,
      isOptionsLoading: false,
    },
    {
      type: 'date',
      options: [],
      urlKey: 'delivery_date',
    },
    {
      type: 'date',
      options: [],
      urlKey: 'created_at',
    },
  ];
  const [page, setpage] = useState(1);
  return (
    <>
      {/* <QueryClientProvider client={queryClient}>
        <Queryparent />
      </QueryClientProvider> */}
      {/* <Parentfilter /> */}
      <Filter filters={filters} refresh={() => setpage(1)} />
    </>
  );
}
