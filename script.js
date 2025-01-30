//your JS code here. If required.
<script>
        document.querySelector('input[type="button"]').addEventListener('click', function() {
            let select = document.querySelector("#colorSelect");
            let selectedIndex = select.selectedIndex;

            if (selectedIndex !== -1) {
                select.remove(selectedIndex);
            }
        });
    </script>