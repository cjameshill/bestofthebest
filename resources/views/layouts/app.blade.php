<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <meta name="csrf-token" content="{{ csrf_token() }}" id="csrf-token">

    <link rel="stylesheet" href="/css/app.css">

    <link href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" rel="stylesheet">

    <title>Cleveland Browns Partnerships: Best of the Best</title>

    @include('partials._js-variables')

</head>
<body>

    @include('partials._svg')

<div id="app">

    @yield('container')

</div>


@if(env('APP_ENV') == 'local')
    <script src="{{ mix('js/app.js') }}"></script>
@else
    <script src="/js/app.js"></script>
@endif

    <script type="text/javascript" src="/js/skrollr.min.js"></script>
    <script type="text/javascript">
        var s = skrollr.init();
    </script>

    <script src="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.js"></script>

</body>
</html>